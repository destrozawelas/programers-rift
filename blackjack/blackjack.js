 
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const cardValues = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
  'J': 10, 'Q': 10, 'K': 10, 'A': 11
};

function shuffleDeck() {
  let deck = cards.slice();
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function dealCard(deck) {
  return deck.pop();
}

function calculateScore(hand) {
  let score = 0;
  let aces = 0;

  for (const card of hand) {
    score += cardValues[card];
    if (card === 'A') {
      aces++;
    }
  }

  while (aces > 0 && score > 21) {
    score -= 10;
    aces--;
  }

  return score;
}

function playBlackjack() {
  const deck = shuffleDeck();
  const playerHand = [dealCard(deck), dealCard(deck)];
  const dealerHand = [dealCard(deck), dealCard(deck)];

  console.log('¡Bienvenido al Blackjack en la consola!\n');

  console.log(`Tu mano: ${playerHand.join(', ')} (Puntuación: ${calculateScore(playerHand)})`);
  console.log(`Carta del crupier: ${dealerHand[0]}\n`);

  while (calculateScore(playerHand) < 21) {
    const choice = prompt('¿Quieres pedir carta (P) o plantarte (S)?').toLowerCase();

    if (choice === 'p') {
      playerHand.push(dealCard(deck));
      console.log(`Tu mano: ${playerHand.join(', ')} (Puntuación: ${calculateScore(playerHand)})`);
    } else if (choice === 's') {
      break;
    }
  }


  while (calculateScore(dealerHand) < 17) {
    dealerHand.push(dealCard(deck));
  }

  console.log('\n¡Resultados!');
  console.log(`Tu mano: ${playerHand.join(', ')} (Puntuación: ${calculateScore(playerHand)})`);
  console.log(`Mano del crupier: ${dealerHand.join(', ')} (Puntuación: ${calculateScore(dealerHand)})\n`);

  if (calculateScore(playerHand) > 21) {
    console.log('¡Has perdido! Te pasaste de 21.');
  } else if (calculateScore(dealerHand) > 21) {
console.log('¡Ganaste! El crupier se pasó de 21.');
} else if (calculateScore(playerHand) > calculateScore(dealerHand)) {
console.log('¡Ganaste! Tu puntuación es mayor que la del crupier.');
} else if (calculateScore(playerHand) < calculateScore(dealerHand)) {
console.log('¡Perdiste! La puntuación del crupier es mayor.');
} else {
console.log('¡Es un empate! Tienen la misma puntuación.');
}
}
