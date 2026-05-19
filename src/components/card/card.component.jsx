import React, { useState } from "react";
import "./card.css";
import { PLACEHOLDER_CARD_PATH } from "../../constants";
import { PLACEHOLDER_CARDBACK_PATH } from "../../constants";

function Card(props) {
  const { gameStarted, name, onFlippedCards } = props;

  //dar um estado à carta
  const [flipped, setFlipped] = useState(false);

  const [matchedCards, setMatchedCards] = useState([]);

  const processMatchingCards = () => {
    const [card1, card2] = onFlippedCards;
    const cardsAreEqual = card1 === card2;

    if (cardsAreEqual) {
      setTimeout(() => {
        //se forem iguais atualizar a variavel de estado e adicionar as cartas iguais ao array inicial ...previesstate= []
        setMatchedCards((previousState) => [...previousState, card1, card2]);
      }, 500);
    } else {
      //se não forem iguais para forçar a renderização e as cartas viradas para tras e manter as cartas já acertadas
      setTimeout(() => {
        setMatchedCards((previousState) => [...previousState]);
      }, 500);
    }
    onFlippedCards = [];
  };

  //Verifica se tem a class flipped ou não, se não tiver não acrecenta nada "". Nota é importante o espaço antes do flipped
  let flippedClass = flipped ? " flipped" : "";

  return (
    <div className={`card ${flippedClass}`} data-logo={name}>
      <img
        src={PLACEHOLDER_CARDBACK_PATH}
        className="card-back"
        alt="card placeholder"
        onClick={() => {
          if (gameStarted) {
            setFlipped(true);

            //de passar o name passa só as string para o array de flipped, se passa-se o props iria passar um obejto {name:""; gamestarted:0}
            onFlippedCards(name);
          }
        }}
      />
      <img
        src={`${PLACEHOLDER_CARD_PATH}${name}.png`}
        className="card-front"
        alt="card"
      />
    </div>
  );
}

export default Card;
