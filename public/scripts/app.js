document.querySelectorAll('.custom-select').forEach(select => {
    const selectedOption = select.querySelector('.selected-option');
    const hiddenInput = select.querySelector('input[name="gameCategory"]');
    const selectBox = select.closest('.selectBox'); // .selectBox'ı bul

    // Dropdown'u aç/kapat
    selectedOption.addEventListener('click', () => {
        select.classList.toggle('openDropdown');
        selectBox.classList.toggle('active'); // .selectBox'a active sınıfı ekle/kaldır
    });

    // Seçeneklere tıklandığında
    select.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const imgSrc = option.querySelector('img').src;
            const text = option.querySelector('span').textContent;

            // Seçili alanı güncelle
            selectedOption.querySelector('img').src = imgSrc;
            selectedOption.querySelector('span').textContent = text;

            // Gizli input'a değeri yaz
            hiddenInput.value = value;

            // Dropdown'u kapat
            select.classList.remove('openDropdown');
            selectBox.classList.remove('active'); // .selectBox'tan active kaldır
        });
    });

    // Dışarı tıklandığında kapat
    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('openDropdown');
            selectBox.classList.remove('active'); // .selectBox'tan active kaldır
        }
    });
});