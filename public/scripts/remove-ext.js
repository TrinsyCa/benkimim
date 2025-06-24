document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        const ids = [
            'speechify-pill-player',
            'speechify-screenshot-mode',
            'speechify-settings-modal',
            'speechify-hover-player-shadow-root',
            'speechify-global-notifications'
        ];

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.remove();
            }
        });
    }, 1000);
});