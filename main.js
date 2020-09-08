let scores, roundScores, activePlayer, gamePlay;

init();


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', () => {
  if(gamePlay) {

    let diceRandom = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.dice').style.display = 'block';

    document.querySelector('.dice').src = 'dice-' + diceRandom + '.png';

    if (diceRandom !== 1) {
      roundScores += diceRandom;
      document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }
    else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
  if (gamePlay) {

    scores[activePlayer] += roundScores;


    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {

      document.querySelector('.dice').style.display = 'none';

      document.querySelector('#name-' + activePlayer).textContent = 'Winner! 😀';

      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      gamePlay = false;
    }
    else {
      nextPlayer();
    }
  }
});


const nextPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  roundScores = 0;

  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;


  document.querySelector('.player-0-panel').classList.toggle('active');

  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScores = 0;
  gamePlay = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent =  0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');

};
