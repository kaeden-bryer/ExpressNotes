const express = require("express");
const app = express();
const database = require("./database")

// implement later
// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Moondarling2!',
//     database: 'notes'
// });

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
// Serve static assets from the 'public' folder (CSS, JS, images)
app.use(express.static("public"))

app.get("/", (req, res) => {
    const notes = database.getNotes();
    res.render("notes.ejs", {
        notes
    })
});

app.get("/goodbye", (req, res) => {
    res.send("<h1>Goodbye World!</h1>");
});

app.get("/test", (req, res) => {
    res.render("index.ejs", {
        numberOfIterations: 50
    })
})

app.get("/notes", (req, res) => {
    const notes = database.getNotes();
    res.render("notes.ejs", {
        notes,
    })
})

app.get("/notes/:id", (req, res) => {
    const id = +req.params.id;
    const note = database.getNote(id)

    console.log(note)
    if (!note) {
        res.status(404).render("note404.ejs")
        return
    }

    res.render("singleNote.ejs", {
        note,
    });
})

app.get("/createNote", (req, res) => {
    res.render("createNote.ejs")
})

app.post("/notes", (req, res) => {
    const data = req.body;
    database.createNote(data);

    res.redirect("/notes");
})

app.post("/notes/:id/delete", (req, res) => {
    const id = +req.params.id
    database.deleteNote(id)
    res.redirect("/notes")
})

const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});