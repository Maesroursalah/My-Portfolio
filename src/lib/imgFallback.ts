import type { SyntheticEvent } from "react"

/**
 * Marks a failed image so it is visible instead of blending into the dark UI,
 * and detaches itself so a failing fallback cannot loop.
 */
export function onImageError(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget
  if (img.dataset.failed === "1") return
  img.dataset.failed = "1"
  img.removeAttribute("srcset")
  img.style.background =
    "repeating-linear-gradient(45deg,#2a1412 0 10px,#1B0C0B 10px 20px)"
  img.style.outline = "1px solid #572A26"
  if (typeof (import.meta as { env?: { DEV?: boolean } }).env?.DEV !== 'undefined' && (import.meta as { env?: { DEV?: boolean } }).env?.DEV) {
    console.warn("[img] failed to load:", img.currentSrc || img.src)
  }
}
