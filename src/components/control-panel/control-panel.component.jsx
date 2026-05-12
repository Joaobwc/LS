import React, { useState } from "react";
import "./control-panel.css";
import Timer from "../timer/timer.component";
import {
  TIMEOUTGAME_BASICO,
  TIMEOUTGAME_INTERMEDIO,
  TIMEOUTGAME_AVANCADO,
} from "../../constants";

function ControlPanel(props) {
  //passar valores de pai para o filho
  const { gameStarted, onGameStart, onLevelChange, selectedLevel } = props;
  const [styleBackground, setstyleBackground] = useState(false);

  const gameStartedClass = gameStarted ? " gameStarted" : "";

  const handleTimer = (seg) => {
    if (seg === 10) setstyleBackground(true);
    if (seg === 0) onGameStart();
  };

  return (
    <section id="panel-control">
      <h3 className="sr-only">Escolha do Nível</h3>
      <form className="form">
        <fieldset className="form-group">
          <label htmlFor="btLevel">Nível:</label>
          <select
            id="btLevel"
            disabled={gameStarted}
            defaultValue="0"
            onChange={onLevelChange}
          >
            <option value="0">Seleccione...</option>
            <option value="1">Básico (2x3)</option>
            <option value="2">Intermédio (3x4)</option>
            <option value="3">Avançado (4x5)</option>
          </select>
        </fieldset>
        <button
          type="button"
          id="btPlay"
          onClick={onGameStart}
          disabled={selectedLevel === "0"}
        >
          {gameStarted ? "Terminar Jogo" : "Iniciar Jogo"}
        </button>
      </form>
      <div className="form-metadata">
        <p id="message" role="alert" className="hide">
          Clique em Iniciar o Jogo!
        </p>
        <dl className={"list-item left" + gameStartedClass}>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">
            {gameStarted && (
              <Timer
                timeout={
                  selectedLevel == "1"
                    ? TIMEOUTGAME_BASICO
                    : selectedLevel == "2"
                      ? TIMEOUTGAME_INTERMEDIO
                      : TIMEOUTGAME_AVANCADO
                }
                onTimer={handleTimer}
              />
            )}
            s
          </dd>
        </dl>
        <dl className={`list-item right${gameStartedClass}`}>
          <dt>Pontuação TOP:</dt>
          <dd id="pointsTop">0</dd>
        </dl>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Pontuação:</dt>
          <dd id="points">0</dd>
        </dl>
        <div id="top10" className="right">
          <button id="btTop">Ver TOP 10</button>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
