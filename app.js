import express from "express";
import amiRouter from "./src/routes/esriCalc.js"; // Import the router

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ami", amiRouter); // Use the router for "/ami" routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
