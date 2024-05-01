import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.send("This is the /ami route");
});

export default router; // Export the router as default
