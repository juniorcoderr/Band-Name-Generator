import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["last"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Band Name</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .band-name-container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .band-name-container h1 {
          color: #ff4500;
          font-size: 2em;
        }

        .band-name-container h2 {
          color: #333;
          font-size: 1.5em;
        }

        footer {
          margin-top: 20px;
          text-align: center;
          font-size: 0.9em;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="band-name-container">
        <h1>Your band name is:</h1>
        <h2>${bandName}✌️</h2>
      </div>
      <footer>
        &copy; 2024 Band Name Generator. All rights reserved.
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
