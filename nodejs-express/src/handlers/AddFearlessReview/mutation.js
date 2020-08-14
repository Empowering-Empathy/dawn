const fearlessReviewOperation = `
mutation MyMutation ($body: String!, $planet_id:uuid!) {
  insert_reviews(objects: {body: $body, planet_id: $planet_id}) {
    affected_rows
  }
}
`;

module.exports.fearlessReviewOperation = fearlessReviewOperation;
