import React, { useState, useEffect } from "react";
import ArrowButton from "./ArrowButton";
import finalAudio from '../assets/final-audio.mp3';

const FinalMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
    const messages = [
        "...",
        "¿Ya lo recuerdas?",
        "¿Recuerdas la calma de pensar en que otro lo hubiera hecho sino eras tu?",
        "Otra persona hubiera puesto la llave, jalado la palanca y presionado el boton",
        "Que tranquilidad, ¿no?",
        "Sólo seguias ordenes",
        "Pero pudiste no hacerlo",
        "¿Por que lo hiciste?",
        "Tú los condenaste a todos",
        "Tú te condenaste a ti mismo",
        "A olvidar",
        "Y a recordar",
        '"Pasado para ver el futuro"',
        "Una",
        "Y otra",
        "Vez"
    ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3577);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; 

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, 
      }}
    >
      <p
        style={{
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {messages[currentMessage]}
      </p>
        {currentMessage == 16 ? <div></div> : <ArrowButton
            onClick={() => {
                if (currentMessage === messages.length - 1) {
                    const audio = new Audio(finalAudio);
                    audio.play();

                    setTimeout(() => {
                        window.location.reload();
                    }, 4000);
                } else {
                    setCurrentMessage((prev) => (prev + 1) % messages.length);
                }
            }}
            color={"white"}
            top="90%"
            left="50%"
        />}
    </div>
  );
};

export default FinalMessage;