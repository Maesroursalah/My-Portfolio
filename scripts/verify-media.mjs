import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

const BANNED = ["raw.githubusercontent.com", "?raw=true", "/blob/"]
const URL_RE = /https:\/\/[^"'`\s)]+\.(?:png|jpe?g|webp|gif|svg|webm|mp4)/gi

const files = []
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full)
    else if (/\.(ts|tsx|css|html)$/.test(entry)) files.push(full)
  }
}
walk("src")

const offences = []
const urls = new Set()

for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    for (const needle of BANNED) {
      if (line.includes(needle)) offences.push(`${file}:${i + 1}  ${needle}`)
    }
    for (const match of line.matchAll(URL_RE)) urls.add(match[0])
  })
}

if (offences.length > 0) {
  console.error("\nverify-media: a code-viewing endpoint is not an asset host. Use")
  console.error("  https://maesroursalah.github.io/portfolio/<path>\n")
  for (const offence of offences) console.error("  " + offence)
  process.exit(1)
}
console.log(`verify-media: static ok (${urls.size} media URLs, 0 banned hosts)`)

if (process.argv.includes("--live")) {
  let failed = 0
  for (const url of [...urls].sort()) {
    try {
      const res = await fetch(url, { method: "HEAD", redirect: "follow" })
      const type = res.headers.get("content-type") ?? "-"
      console.log(`${res.ok ? "ok  " : "FAIL"} ${res.status} ${type}  ${url}`)
      if (!res.ok) failed++
    } catch (error) {
      console.log(`FAIL --- ${url}  (${error.message})`)
      failed++
    }
  }
  if (failed > 0) {
    console.error(`\nverify-media: ${failed} URL(s) unreachable`)
    process.exit(1)
  }
  console.log("verify-media: live ok")
}
