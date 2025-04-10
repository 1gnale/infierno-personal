import React from "react";

const BookButton = ({ imageUrl, altText, setBookState, bookState }) => {
  const handleClick = () => {
    setBookState(!bookState);
    console.log("Book button clicked, current state:", !bookState);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{
          width: "100px", 
          height: "100px",
          objectFit: "cover",
        }}
      />
    </button>
  );
};

export default BookButton;