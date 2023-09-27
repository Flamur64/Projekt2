import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send('<div style="display: flex; justify-content: center; align-items: center; height: 100vh;"><a href="/anmeldung" style="text-decoration: none; background-color: #007bff; color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold;">->Login zum Quizspiel<-</a></div>')
  })

app.get("/anmeldung", function (req, res) {
    res.sendFile("anmeldung.html", { root: "./" })
  })
  
app.get("/quiz", function (req, res) {
    res.sendFile("quiz.html", { root: "./" })
  })

  app.post("/anmeldung", function (req, res) {
    const { name } = req.body
    const response = `
        Herzlich Wilkommen: ${name}!<br>
        <a href="/quiz">Zum Quiz</a>
    `
    res.send(response)
})



app.listen(port, function () {
    console.log("Server listening on port: " + port)
  })