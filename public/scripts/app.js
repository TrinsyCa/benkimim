document.querySelectorAll('.custom-select').forEach(select => {
    const selectedOption = select.querySelector('.selected-option');
    const hiddenInput = select.querySelector('input[name="gameCategory"]');
    const selectBox = select.closest('.selectBox'); // .selectBox'ı bul

    selectedOption.addEventListener('click', () => {
        select.classList.toggle('openDropdown');
        selectBox.classList.toggle('active');
    });

    select.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const imgSrc = option.querySelector('img').src;
            const text = option.querySelector('span');

            selectedOption.querySelector('img').src = imgSrc;
            selectedOption.querySelector('span').textContent = text.textContent;
            if(text.getAttribute('font')) {
                selectedOption.querySelector('span').setAttribute('font', text.getAttribute('font'));
            }
            else {
                selectedOption.querySelector('span').removeAttribute('font');
            }

            hiddenInput.value = value;

            select.classList.remove('openDropdown');
            selectBox.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('openDropdown');
            selectBox.classList.remove('active');
        }
    });
});