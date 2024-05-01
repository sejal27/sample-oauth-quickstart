const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express server test"));

app.get("/about", (req, res) => res.send("about page"));


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;