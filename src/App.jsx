import { useState } from "react";
import "./assets/styles/App.css";

import { ControlPanel, Footer, Header, GamePanel } from "./components";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectdLevel] = useState("0");

  const handleGameStart = () => {
    if (gameStarted) setGameStarted(false);
    else setGameStarted(true);
  };
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    //const value = event.currentTarget.value;

    setSelectdLevel(value);
  };
  return (
    <div id="container">
      <Header />
      <main>
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          onLevelChange={handleLevelChange}
          selectedLevel={selectedLevel}
        />
        <GamePanel selectedLevel={selectedLevel} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
