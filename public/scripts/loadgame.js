const playButtonSections = document.getElementById('playButtonSections');
const startGameSection = document.getElementById('startGameSection');
function createGameSection(thisBtn) {
    thisBtn.style.width = startGameSection.querySelector('.playgame-item').offsetWidth + 'px';
    startGameSection.classList.add('createGameActive');

    setTimeout(() => { playButtonSections.classList.add('creategame'); }, 250);
}
function closeCreateGameSection() {
    playButtonSections.classList.remove('creategame');

    setTimeout(() => {
        const playBtns = document.querySelectorAll('.play-button');
        playBtns.forEach(btn => {
            btn.style.removeProperty('width');
        });
        
        startGameSection.classList.remove('createGameActive');
    }, 250);
}