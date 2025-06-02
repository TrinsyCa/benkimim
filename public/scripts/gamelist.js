const gamelistTabActivePlaysBtn = document.getElementById('gamelistTabActivePlaysBtn');
const gamelistTabPlayedGamesBtn = document.getElementById('gamelistTabPlayedGamesBtn');
const gamelistTabSidesContainer = document.getElementById('gamelistTabSidesContainer');
const gamelistTabSides = document.getElementById('gamelistTabSides');

gamelistTabActivePlaysBtn.addEventListener('click', () => {
  gamelistTabActivePlaysBtn.classList.add('active');
  gamelistTabPlayedGamesBtn.classList.remove('active');
  gamelistTabSides.style.translate = '0px';
});
gamelistTabPlayedGamesBtn.addEventListener('click', () => {
  gamelistTabPlayedGamesBtn.classList.add('active');
  gamelistTabActivePlaysBtn.classList.remove('active');
  gamelistTabSides.style.translate = `-${gamelistTabSidesContainer.offsetWidth}px 0px`;
});