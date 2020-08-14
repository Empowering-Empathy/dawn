const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const {
  addFearlessReviewHandler,
} = require("./handlers/AddFearlessReview/handler");

// Request Handler
app.post("/AddFearlessReview", addFearlessReviewHandler);

app.listen(PORT);
