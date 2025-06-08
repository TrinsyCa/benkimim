document.querySelectorAll('.custom-select').forEach(select => {
    const selectedOption = select.querySelector('.selected-option');
    const hiddenInput = select.querySelector('input.hiddenSelectValue');
    const selectBox = select.closest('.selectBox');

    selectedOption.addEventListener('click', () => {
        select.classList.toggle('openDropdown');
        selectBox.classList.toggle('active');
    });

    select.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const text = option.querySelector('span');

            selectedOption.innerHTML = option.innerHTML;
            if(text.getAttribute('font')) {
                selectedOption.querySelector('span').setAttribute('font', text.getAttribute('font'));
            }
            else {
                selectedOption.querySelector('span').removeAttribute('font');
            }

            if(hiddenInput && value) {
                hiddenInput.value = value;
            }

            if(select.classList.contains('questSelectTrigger')) {
                const profileQuestTrigger = document.querySelectorAll('.profileQuestTrigger');
                profileQuestTrigger.forEach((trigger) => {
                    const triggerText = option.querySelector('span');

                    trigger.innerHTML = option.innerHTML;
                    if(triggerText.getAttribute('font')) {
                        selectedOption.querySelector('span').setAttribute('font', text.getAttribute('font'));
                    }
                    else {
                        selectedOption.querySelector('span').removeAttribute('font');
                    }
                });
            }

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