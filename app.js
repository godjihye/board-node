const express = require("express");
const app = express();
require("dotenv").config();
// process.env
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ result: "success" });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 실행중`);
});
