import React from "react";

const Details = (props) => {
  return (
    <>
      <h1>Hi lol !</h1>
      <pre>
        <code>{JSON.stringify(props, null, 10)}</code>
      </pre>
    </>
  );
};

export default Details;
