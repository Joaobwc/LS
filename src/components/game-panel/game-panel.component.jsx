import React from "react";
import "./game-panel.css";
import { Card } from "../index";
import { CARDS_LOGOS } from "../../constants";

function GamePanel() {
  return (
    <section id="panel-game">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game">
        {CARDS_LOGOS.slice(0, 6).map((ele) => (
          <Card name={ele} key={ele}></Card>
        ))}
        {/* Ciclo em cima igual 
        <Card name="angular" />
        <Card name="html" />
        <Card name="javascript" />
        <Card name="bootstrap" />
        <Card name="vue" />
        <Card name="react" /> */}
      </div>
    </section>
  );
}

export default GamePanel;
