import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: #343a40;
            font-family: Arial, sans-serif;
          }
          .button-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .button-container a {
            text-decoration: none;
            background-color: #17a2b8;
            color: #fff;
            padding: 30px 60px;
            border-radius: 10px;
            font-weight: bold;
            margin: 10px; /* Add margin to create space between buttons */
          }
        </style>
      </head>
      <body>
        <div class="button-container">
          <a href="/quiz1">Quizspiel: Allgemeinwissen IT</a>
          <a href="/quiz2">Quizspiel: AWS Cloud Practitioner</a>
          <a href="/quiz3">Quizspiel: Scrum Master</a>
        </div>
      </body>
    </html>
  `);
});

app.get("/quiz1", function (req, res) {
    res.sendFile("quiz1.html", { root: "./" })
  })

app.get("/quiz2", function (req, res) {
    res.sendFile("quiz2.html", { root: "./" })
  })

app.get("/quiz3", function (req, res) {
    res.sendFile("quiz3.html", { root: "./" })
  })

app.listen(port, function () {
    console.log("Server listening on port: " + port)
  })