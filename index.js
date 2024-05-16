const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", jobRoutes);

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yl7zpaq.mongodb.net/note?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(URI)
  .then(() => {
    console.log("DB is connected successfully!");
  })
  .catch((err) => {
    console.log(err, "connection error");
  });
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
