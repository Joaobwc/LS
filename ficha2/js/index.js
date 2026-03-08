"use strict";

//var
const panelControl = document.getElementById("panel-control");
const panelGame = document.querySelector("#panel-game");
const btLevel = document.getElementById("btLevel");
const btPlay = document.getElementById("btPlay");

const elementos = document.querySelectorAll(".list-item"); //querySelectorAll devolve um array de elementos 

const message = document.querySelector("#message");

//Teremos uma nodeList dos vários elementos com essa class
const cards = document.querySelectorAll(".card");

const cardsLogos = ["angular", "bootstrap", "html","javascript", "vue", "svelte","react","css","backbone","ember"];

//funções
function flipCard(){
    this.classList.add("flipped");

}
function reset() {
    if (btLevel.value === "0") {
        btPlay.disabled = true;
        panelGame.style.display = "none";
    }
    else {
        btPlay.disabled = false;
        panelGame.style.display = "grid";

    }
    for (let x of elementos) {
        x.classList.remove("gameStarted");
    }

}

function startGame() {
    btLevel.disabled = true;

    btPlay.textContent = "Terminar Jogo";
    //adicionar a class a cada elemento da classe .list-item
    elementos.forEach(function (x) {
        x.classList.add("gameStarted");
    })

    /*
    for (let x of elementos){
        x.classList.add("gameStarted");    
    }
    */
    message.classList.add("hide")

    //showCards();

    console.table(cardsLogos);
    shuffleArray(cardsLogos);
    console.table(cardsLogos);
console.log("TESTR")
    //garatir se são pares
    let newCardLogos = cardsLogos.slice(0,3);
    newCardLogos = [...newCardLogos, ...cardsLogos];
    shuffleArray(cardsLogos);


    let indice = 0;
    for(let card of cards ){
        let cardFront = card.querySelector(".card-front");
        cardFront.src= `images/${newCardLogos[indice]}.png`;
        card.dataset.logo = newCardLogos[indice];
        indice++;
        card.addEventListener("click", flipCard);
    }

    

}

function stopGame() {
    btPlay.textContent = "Iniciar Jogo";
    btLevel.disabled = false;

    message.classList.remove("hide")

    reset();

    hideCard();

}

function showCards(){
    for(let card of cards)
        card.classList.add("flipped");
}

function hideCard(){
    for(let card of cards)
        card.classList.remove("flipped");
}

const shuffleArray = array =>{
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
}

/*function flipCard(){
    this.classList.add("flipped");

}*/

//event listeners
btLevel.addEventListener("change", reset);

btPlay.addEventListener("click", function () {
    if (btPlay.textContent === "Terminar Jogo") {
        stopGame();
    }
    else startGame();
})

panelGame.addEventListener("click", function () {
    message.classList.toggle("hide");
    //ou
    //message.textContent = message.textContent===""? "Clique em Iniciar o Jogo!" : "";
})

/*
for(let card of cards){
    card.addEventListener("click", flipCard);
}
*/