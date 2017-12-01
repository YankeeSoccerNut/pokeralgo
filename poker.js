// Get user id and password.....// TODO: encrypt/decrypt for security
let fsIdPass = require('fs');
let pokerData = '';
let hands = [];
let cards = [];

// Use synchronous read as we really can't do anything else until we have the userId and password....
pokerData = fsIdPass.readFileSync('./poker.txt', 'utf8');

console.log(pokerData);

// hands.push(pokerData.split("\n"));
hands = pokerData.split("\n");

//console.log(hands);

let currentHands = splitHand(hands[0]);

sortHands(currentHands.player1);

function sortHands(hand){
  hand[0].sort();
  console.log(hand);
};

function splitHand(hand){
  let cards = hand.split(" ");

  let splitHands = {
    player1: [],
    player2: []
  };

  cards.map((card, index) => {
    let cardObject = {suit:'', rank:0};
    cardObject.suit = card[1];

    //need to set rank properly....
    switch(card[0]) {
    case "T":
        cardObject.rank = 10;
        break;
    case "J":
      cardObject.rank = 11;
        break;
    case "Q":
      cardObject.rank = 12;
        break;
    case "K":
      cardObject.rank = 13;
        break;
    case "A":
      cardObject.rank = 14;
        break;
    default:
      cardObject.rank = parseInt(card[0]);
    }

    console.log(cardObject);
    if (index <=4 ) {   //Player 1 Hand
      if (splitHands.player1 == undefined){
        splitHands.player1 = cardObject;
      } else {
        splitHands.player1.push(cardObject);
      }
    } else {  //Player 2 Hand
      if (splitHands.player2 == undefined){
        splitHands.player2 = cardObject;
      } else {
        splitHands.player2.push(cardObject);
      }
    };
    console.log(card, index);
  });

  console.log(splitHands);

  // value:
  // suit:
};




// var userIdPass = idPassRecord.split("|");
// var trimmedUserPass = userIdPass[1].trim();
