const express = require("express");
app = express();

app.listen(5000, () => console.log("listening on port 5000"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>hello o world<h1>");
});
