const fetch = require("node-fetch");
const { fearlessReviewOperation } = require("./mutation");

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch("http://0.0.0.0:8080/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: fearlessReviewOperation,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};

const addFearlessReviewHandler = async (req, res) => {
  // get request input
  const { body, planet_id } = req.body.input;

  // run some business logic
  if (body.toLowerCase().includes("fear")) {
    return res.status(400).json({ message: "Fear is the mind-killer." });
  }

  // execute the Hasura operation
  const { data, errors } = await execute({ body, planet_id });

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0]);
  }

  // success
  return res.json({
    ...data.insert_reviews,
  });
};

module.exports.addFearlessReviewHandler = addFearlessReviewHandler;
