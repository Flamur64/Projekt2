import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send('<html><head><style>body { background-color: #343a40; font-family: Arial, sans-serif; }</style></head><body style="display: flex; justify-content: center; align-items: center; height: 100vh;"><a href="/quiz" style="text-decoration: none; background-color: #17a2b8; color: #fff; padding: 30px 60px; border-radius: 10px; font-weight: bold;">Zum Quizspiel</a></body></html>')
})

app.get("/quiz", function (req, res) {
    res.sendFile("quiz.html", { root: "./" })
  })

app.listen(port, function () {
    console.log("Server listening on port: " + port)
  })