const fs = require("fs");
const path = require("path");

const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const placesRoutes = require("./routes/places-route");
const usersRoutes = require("./routes/users-route");

// Load env vars //
dotenv.config({ path: "./config/config.env" });

const app = express();
connectDB();
// middleware //
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use(express.static(path.join("public")));

// routes //
app.use("/api/places", placesRoutes);

app.use((err, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => console.log(err));
  }
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500).json({ message: err.message || "Server Error" });
});

app.use("/api/users", usersRoutes);
app.use((err, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => console.log(err));
  }
  if (res.headerSent) {
    return next(err);
  }
  console.log(err.message);
  console.log(err.code);

  res
    .status(err.code || 500)
    .json({ message: err.message || "Server Error Occured" });
});

// Serve static assets in production //
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
