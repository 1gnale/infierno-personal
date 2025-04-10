import React from "react";

const ArrowButton = ({ onClick, color}) => {
    return (
        <button
            onClick={onClick}
            style={{
                background: "none",
                border: "none",
                padding: "10px",
                cursor: "pointer",
                position: "absolute",
                top: "80%",
                left: "79%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <svg
                fill= {color}
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
                id="memory-arrow-left-bold"
                transform="rotate(180)"
                style={{
                    width: "24px",
                    height: "24px",
                }}
            >
                <path d="M12 20H10V19H9V18H8V17H7V16H6V15H5V14H4V13H3V12H2V10H3V9H4V8H5V7H6V6H7V5H8V4H9V3H10V2H12V7H20V15H12V20M10 16V13H18V9H10V6H9V7H8V8H7V9H6V10H5V12H6V13H7V14H8V15H9V16H10Z"></path>
            </svg>
        </button>
    );
};

export default ArrowButton;