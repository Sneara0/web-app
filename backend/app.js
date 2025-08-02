const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRoutes = require("./routes/user.routes");

// error middleware import
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/users", userRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy 🚀" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// centralized error handling middleware (সব route এর শেষে)
app.use(errorHandler);

module.exports = app;
