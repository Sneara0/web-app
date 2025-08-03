const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRoutes = require("./routes/user.routes");

// error middleware import
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// Enable JSON parsing
app.use(express.json());

// ✅ Proper CORS setup (allow frontend domain)
app.use(cors({
  origin: "https://web-app-287g.vercel.app", // your frontend URL
  credentials: true,
}));

// Secure HTTP headers
app.use(helmet());

// API routes
app.use("/api/users", userRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy 🚀" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
