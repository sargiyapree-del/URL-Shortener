const express = require("express");
const app = express();

app.use(express.json());

const urls = {};

app.post("/shorten", (req, res) => {
  const longUrl = req.body.url;

  const shortCode = Math.random().toString(36).substring(2, 7);

  urls[shortCode] = longUrl;

  res.json({
    shortUrl: `http://localhost:3000/${shortCode}`
  });
});

app.get("/:code", (req, res) => {
  const shortCode = req.params.code;

  const longUrl = urls[shortCode];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.send("URL not found");
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});