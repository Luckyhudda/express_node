const express = require("express");
const path = require("path");
const app = express();

app.get("/json/:id", (req, res) => {
  const pid = req.params.id;
  res.json({
    id: pid,
    name: "Lucky hudda",
  });
});
app.listen(7890)