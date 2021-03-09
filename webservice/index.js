const dotenv = require("dotenv");
const { error, parsed } = dotenv.config();
if (error) {
  throw error;
}
const { API_KEY } = parsed;
const express = require("express");
const cors = require("cors");
const { get } = require("axios");
const { translatApiResponse } = require("./formattingHelpers");
const app = express();

app.use(cors());

app.get("/movies", (req, res) => {
  const { search } = req.query;
  get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&include_adult=false`
  )
    .then((response) => {
      // format the returned data
      res.send(translatApiResponse(response.data));
    })
    .catch((error) => console.log(error));
});

app.get("/configuration", (req, res) => {
  get(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`);
});
