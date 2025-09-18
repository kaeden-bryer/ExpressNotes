const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/goodbye", (req, res) => {
    res.send("<h1>Goodbye World!</h1>");
});

const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});