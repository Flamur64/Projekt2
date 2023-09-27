import express from "express"
import bodyParser from "body-parser"
import fs from "fs"
import path from "path"

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send('<a href="/anmeldung">Zur Anmeldung</a>')
})


app.get("/anmeldung", function (req, res) {
    res.sendFile("anmeldung.html", { root: "./" })
  })

  app.post("/anmeldung", function (req, res) {
    const { name, password } = req.body
    if (name === "gruppe1" && password === "12345") {
      res.redirect("/tasks")
    } else {
      res.send("Anmeldung fehlgeschlagen.")
    }
  })

app.listen(port, function () {
    console.log("Server listening on port: " + port)
  })