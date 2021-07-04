import React, { useState } from "react";
import "./style.css";

//components
import Details from "../Details/Details";
function DisplayWord({ word }) {
  const [showdetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(true);
  };
  return (
    <>
      <div className="wordDiv" onClick={handleClick}>
        <h3>{word.title}</h3>
        <p>
          ({word.lexicalCategory}) &nbsp;{word.definitions}
        </p>
      </div>
      {showdetails ? (
        <Details word={word} setShowDetails={setShowDetails} />
      ) : null}
    </>
  );
}

export default DisplayWord;
