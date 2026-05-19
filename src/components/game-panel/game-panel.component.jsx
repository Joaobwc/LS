import { useState, useEffect } from "react";
import "./game-panel.css";
import { Card } from "../index";
import { CARDS_LOGOS } from "../../constants";
import { shuffleArray } from "../../helpers";

function GamePanel({ props, selectedLevel, gameStarted }) {
  const [cards, setCards] = useState([]);

  let flippedCards = [];

  //exeplo de passar do filho para o pai, pai gamepael, filho card
  const handleFlippedCard = (props) => {
    flippedCards = [...flippedCards, props];
    if (flippedCards.length === 2) console.log("2 cards flipped");
  };

  let gameClass =
    selectedLevel === "1"
      ? ""
      : selectedLevel === "2"
        ? "intermedio"
        : "avancado";

  let numOfCardPairs;

  const createPanel = () => {
    switch (selectedLevel) {
      case "1":
        numOfCardPairs = 3;
        break;
      case "2":
        numOfCardPairs = 6;
        break;
      case "3":
        numOfCardPairs = 10;
        break;
      default:
        numOfCardPairs = 0;
        break;
    }

    let initialCards = shuffleArray(CARDS_LOGOS);
    initialCards = initialCards.slice(0, numOfCardPairs);

    const doubleCardsObjets = [];

    initialCards.forEach((card) => {
      doubleCardsObjets.push({ id: card, name: card });
      doubleCardsObjets.push({ id: `${card}-clone`, name: card });
    });
    let doubleShuffledCardsObjets = shuffleArray(doubleCardsObjets);

    setCards(doubleShuffledCardsObjets);
  };

  useEffect(() => {
    createPanel();
  }, [selectedLevel]);

  return (
    <section id="panel-game">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass}>
        {cards.map((ele) => (
          <Card
            key={ele.id}
            name={ele.name}
            gameStarted={gameStarted}
            onFlippedCards={handleFlippedCard}
          ></Card>
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
