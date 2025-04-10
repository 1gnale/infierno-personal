import React, {useState} from "react";
import ArrowButton from "./ArrowButton";


const OpenBook = ({riddle, checkAnswer}) => {
    const [userInput, setUserInput] = useState("");

    const handleInputChange = (event) => {
        setUserInput(event.target.value); 
      };
  return (
    <div style={{
        position: "relative", 
        left: "15%",
        width: "600px", 
        height: "auto",
      }}>
      <img
        src={riddle}
        alt="Libro abierto"
        style={{
          width: "650px", 
          height: "auto",
        }}
      />
      <input
        type="text"
        placeholder="Escribe aquí..."
        value={userInput}
        onChange={handleInputChange}
        style={{
            position: "absolute", 
            top: "68%", 
            left: "79%", 
            transform: "translate(-50%, -50%)", 
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #681914",
            borderRadius: "5px",
            width: "150px",
            backgroundColor: "#681914",
        }}
      />
        <ArrowButton
            onClick={() => {
            checkAnswer(userInput);
            }}
            color="black"
            top="80%"
            left="79%"
        />
    </div>
  );
};

export default OpenBook;