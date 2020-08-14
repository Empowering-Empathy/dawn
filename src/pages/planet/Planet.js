import React, { useState } from "react";
import { useSubscription, gql } from "@apollo/client";
import { Badge } from "../../components/shared/Badge";
import { List, ListItem, ListItemWithLink } from "../../components/shared/List";
import InputForm from "../../components/inputForm/InputForm";
// import { PLANET } from "../../graphql/subscriptions";

const PLANET = gql`
  subscription Planet($id: uuid!) {
    planets_by_pk(id: $id) {
      id
      name
      cuisine
      reviews {
        id
        body
      }
    }
  }
`;
const Planet = ({
  match: {
    params: { id },
  },
}) => {
  const [inputVal, setInputVal] = useState("");
  const { loading, error, data } = useSubscription(PLANET, {
    variables: { id },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  const { name, cuisine, reviews } = data.planets_by_pk;

  return (
    <div>
      <h3>
        {name} <Badge>{cuisine}</Badge>
      </h3>
      <InputForm
        inputVal={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onSubmit={() => {}}
        buttonText="Submit"
      />
      <List>
        {reviews.map((review) => (
          <ListItem key={review.id}>{review.body}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Planet;
