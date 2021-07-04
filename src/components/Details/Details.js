import React from "react";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./details.css";
const details = ({ word, setShowDetails }) => {
  const handleCloseButton = () => {
    setShowDetails(false);
  };
  return (
    <div className="detailsDiv">
      <div className="closeButton">
        <Button onClick={handleCloseButton}>
          <CloseIcon />
        </Button>
      </div>

      <h2>{word.title}</h2>
      <p>{word.lexicalCategory}</p>
      <p>{word.definitions}</p>
      <ul>
        {word.examples.map((example, index) => (
          <li key={index}>{example.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default details;
