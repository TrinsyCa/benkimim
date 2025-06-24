document.addEventListener('DOMContentLoaded', () => {
    const deleteBtn = document.getElementById('deleteAccBtn');
    deleteBtn.addEventListener('click', (e) => {
        if (!deleteBtn.classList.contains('active')) {
            e.preventDefault();
        }
        else if (confirm("Hesabınızı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.")) {

        } 
        else {
            e.preventDefault();
        }
    });
});