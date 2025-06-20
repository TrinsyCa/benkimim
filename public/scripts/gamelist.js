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

function createGameBtn(btnElement) {
  btnElement.classList.add('active');
  btnElement.querySelector('span').innerText = 'Oyun Başlatılıyor..';
  gamePasswordBool = true;
}

const gamelistContainer = document.getElementById('gamelistContainer');
const gamelistProfileMenu = document.getElementById('gamelistProfileMenu');
const settingsSecBtn = document.getElementById('settingsSecBtn');
const settingsContainer = document.getElementById('gamelistSettingsContainer');
const gamelistProfile = document.getElementById('gamelistProfile');
settingsSecBtn.addEventListener('click', () => {
  gamelistProfileMenu.classList.add('active');
  gamelistContainer.classList.add('settings-active');
  settingsContainer.classList.add('activate-settings');
  gamelistProfile.classList.add('settings-active');
});
const settingsSecBtnClose = document.getElementById('settingsSecBtnClose');
settingsSecBtnClose.addEventListener('click', () => {
  gamelistProfileMenu.classList.remove('active');
  gamelistContainer.classList.remove('settings-active');
  settingsContainer.classList.remove('activate-settings');
  gamelistProfile.classList.remove('settings-active');
});

const settingslistTabStatisticsBtn = document.getElementById('settingslistTabStatisticsBtn');
const settingslistTabEditProfileBtn = document.getElementById('settingslistTabEditProfileBtn');
const settingslistTabSettingsBtn = document.getElementById('settingslistTabSettingsBtn');
const settingsTabSidesContainer = document.getElementById('settingsTabSidesContainer');
const settingsTabSides = document.getElementById('settingsTabSides');

settingslistTabStatisticsBtn.addEventListener('click', () => {
  settingslistTabEditProfileBtn.classList.remove('active');
  settingslistTabSettingsBtn.classList.remove('active');
  settingslistTabStatisticsBtn.classList.add('active');
  settingsTabSides.style.translate = '0px';
});
settingslistTabEditProfileBtn.addEventListener('click', () => {
  settingslistTabStatisticsBtn.classList.remove('active');
  settingslistTabSettingsBtn.classList.remove('active');
  settingslistTabEditProfileBtn.classList.add('active');
  settingsTabSides.style.translate = `-${settingsTabSidesContainer.offsetWidth}px 0px`;
});
settingslistTabSettingsBtn.addEventListener('click', () => {
  settingslistTabStatisticsBtn.classList.remove('active');
  settingslistTabEditProfileBtn.classList.remove('active');
  settingslistTabSettingsBtn.classList.add('active');
  settingsTabSides.style.translate = `-${settingsTabSidesContainer.offsetWidth * 2}px 0px`;
});

const profileDotsBtn = document.getElementById('profileDotsBtn');
const profileDotsContainer = document.getElementById('profileDotsContainer');

profileDotsBtn.addEventListener('click', () => {
  profileDotsBtn.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (
    !profileDotsBtn.contains(e.target) &&
    !profileDotsContainer.contains(e.target)
  ) {
    profileDotsBtn.classList.remove('active');
  }
  const profileSocialLinks = document.querySelectorAll('.profile-social-link-container');
  if(profileDotsBtn.classList.contains('active')) {
    profileSocialLinks.forEach((link) => {
      link.classList.add('dots-container-active')
    });
  }
  else if (!profileDotsBtn.classList.contains('active')) {
    profileSocialLinks.forEach((link) => {
      link.classList.remove('dots-container-active')
    });
  }
});

const selectBoxes = document.querySelectorAll('.inputBox.selectBox');
selectBoxes.forEach((selectBox) => {
  const selectOptions = selectBox.querySelectorAll('.options .option');
  selectOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
      const selectInputs = selectBox.querySelectorAll('.selectInputs input');
      selectInputs.forEach((input) => {
        if(input.getAttribute('name') === option.getAttribute('data-value')) {
          setTimeout(() => {
            input.classList.add('active');
            selectBox.querySelector('label').setAttribute('for', option.getAttribute('data-value'));
          }, 150);
        }
        else {
          input.removeAttribute('class');
        }
      });
    });
  });
});
