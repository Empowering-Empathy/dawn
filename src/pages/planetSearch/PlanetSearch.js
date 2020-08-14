import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import InputForm from "../../components/inputForm/InputForm";
import Planets from "../../components/planets/Planets";

const SEARCH = gql`
  query Search($match: String) {
    planets(order_by: { name: asc }, where: { name: { _ilike: $match } }) {
      name
      cuisine
      id
    }
  }
`;

const PlanetSearch = () => {
  const [inputVal, setInputVal] = useState("");
  const [search, { loading, error, data }] = useLazyQuery(SEARCH);

  return (
    <div>
      <InputForm
        inputVal={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onSubmit={() => search({ variables: { match: `%${inputVal}%` } })}
      />
      <Planets newPlanets={data ? data.planets : null} />
    </div>
  );
};

export default PlanetSearch;
