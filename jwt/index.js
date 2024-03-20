const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "secretkey";

app.get("/", (req, res) => {
  res.json({
    message: "a simple api",
  });
});

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "richu",
    email: "richu@gmail.com",
  };
  jwt.sign(user, secretKey, { expiresIn: "300s" }, (err, token) => {
    if (err) {
      console.error("Error generating JWT token:", err);
      res
        .status(500)
        .json({ error: "An error occurred while generating JWT token" });
    } else {
      res.json({ token });
    }
  });
});

app.listen(7000, () => {
  console.log("app is running on 7000 port");
});
