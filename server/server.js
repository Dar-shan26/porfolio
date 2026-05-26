import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, "../client/dist");
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173,http://127.0.0.1:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/api", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running.",
    health: "/api/health",
    contact: "/api/contact",
  });
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "Portfolio API is running." });
});

app.use("/api/contact", contactRoutes);

app.use("/api", (req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
});

if (isProduction) {
  app.use(express.static(clientDistPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
} else {
  app.get("/", (_req, res) => {
    res.status(200).json({
      success: true,
      message: "Portfolio API is running. Open the React website at http://127.0.0.1:5173 during development.",
      api: "/api",
      health: "/api/health",
    });
  });
}

app.use((error, _req, res, _next) => {
  console.error("Server error:", error);
  res.status(500).json({ success: false, message: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on port ${PORT}`);
});
