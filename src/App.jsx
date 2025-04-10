import { useState } from 'react';
import background1 from './assets/habitacion.png';
import background2 from './assets/habitacion2.png';
import background3 from './assets/habitacion3.png';
import background4 from './assets/habitacion4.png';
import background5 from './assets/habitacion5.png';
import background6 from './assets/habitacion6.png';
import riddle0 from './assets/libro-acertijo-0-wake-up.png';
import riddle1 from './assets/libro-acertijo-1-pasado.png';
import riddle2 from './assets/libro-acertijo-2-para.png';
import riddle3 from './assets/libro-acertijo-3-ver.png';
import riddle4 from './assets/libro-acertijo-4-el.png';
import riddle5 from './assets/libro-acertijo-5-futuro.png';
import transitionGif from './assets/transition.gif';
import transitionSound from './assets/transition-sound-effect.wav'; // Importa el archivo de sonido
import BackgroundScene from './components/BackgroundScene';

const levels = [
  { riddle: riddle0, background: background1, answer: 'wake up' },
  { riddle: riddle1, background: background1, answer: 'pasado' },
  { riddle: riddle2, background: background2, answer: 'para' },
  { riddle: riddle3, background: background3, answer: 'ver' },
  { riddle: riddle4, background: background4, answer: 'el' },
  { riddle: riddle5, background: background5, answer: 'futuro' },
  { riddle: riddle1, background: background6 },
];

function App() {
  const [bookState, setBookState] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const checkAnswer = (userInput) => {
    if (userInput.toLowerCase() === levels[currentLevel].answer) {
      console.log('Respuesta correcta!');
      setIsTransitioning(true);

      const audio = new Audio(transitionSound);
      audio.play();

      audio.onended = () => {
        setCurrentLevel((prevLevel) => Math.min(prevLevel + 1, levels.length - 1));
        setIsTransitioning(false);
        setBookState(false);
      };
    } else {
      console.log('Respuesta incorrecta. Intenta de nuevo.');
    }
  };

  return (
    <div className="container-flex bg-gray-900">
      {isTransitioning ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
          }}
        >
          <img src={transitionGif} alt="Transición" />
        </div>
      ) : (
        <BackgroundScene
          level={currentLevel}
          riddle={levels[currentLevel].riddle}
          imageUrl={levels[currentLevel].background}
          bookState={bookState}
          setBookState={setBookState}
          checkAnswer={checkAnswer}
        />
      )}
    </div>
  );
}

export default App;