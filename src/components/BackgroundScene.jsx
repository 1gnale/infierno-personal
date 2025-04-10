import React from "react";
import BookButton from "./BookButton";
import closedBook from '../assets/libro-cerrado.png';
import closedFinalBook from '../assets/libro-cerrado-final.png';
import OpenBook from "./OpenBook";
import FinalMessage from "./FinalMessage";

const book = closedBook;
const bookFinal = closedFinalBook;
const BackgroundScene = ({ imageUrl, setBookState, bookState, riddle, checkAnswer, level }) => {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#d3d3d3",
        padding: "10px",
        boxSizing: "border-box",
    };

    const imageStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        border: "5px solid gray",
    };

    return (
        <div style={containerStyle}>
            {<div style={imageStyle}>
                {level === 6 ? (
                    <div>
                        <BookButton imageUrl={bookFinal} />
                        <FinalMessage />
                    </div>
                )
                    : <BookButton imageUrl={book}
                        altText="Libro"
                        bookState={bookState}
                        setBookState={setBookState} />}
                {bookState && <OpenBook riddle={riddle}
                    checkAnswer={checkAnswer} />}
            </div>}
        </div>
    );
};

export default BackgroundScene;