import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Contact schema for Zod validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().optional(),
  engagementType: z.string().optional(),
  budget: z.string().optional(),
  projectType: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// In-memory store for messages (useful during session)
const receivedMessages: Array<{
  id: string;
  name: string;
  email: string;
  company?: string;
  engagementType?: string;
  budget?: string;
  projectType: string;
  message: string;
  timestamp: string;
}> = [];

// API Endpoints
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/casablanca-time", (_req, res) => {
  const now = new Date();
  const timeString = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Casablanca",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);

  const dateString = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Casablanca",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(now);

  res.json({
    time: timeString,
    date: dateString,
    timezone: "WEST (UTC+1)",
    city: "Casablanca, Sidi Maarouf",
    iso: now.toISOString(),
  });
});

app.post("/api/contact", (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    const newMessage = {
      id: "msg_" + Math.random().toString(36).substr(2, 9),
      ...validatedData,
      timestamp: new Date().toISOString(),
    };
    receivedMessages.push(newMessage);
    console.log("📥 New contact message received from:", validatedData.email);

    res.status(200).json({
      success: true,
      message: `Thank you, ${validatedData.name}! Your message has been received. Mesrour will reply to ${validatedData.email} within 24 hours.`,
      id: newMessage.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        error: "Validation failed",
        details: error.issues,
      });
    } else {
      res.status(500).json({
        success: false,
        error: "An error occurred processing your inquiry.",
      });
    }
  }
});

async function main() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
});
