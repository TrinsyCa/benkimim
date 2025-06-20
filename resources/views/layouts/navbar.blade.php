<nav>
    <div class="nav-container">
        <div class="logo">
            <a href="{{ url('') }}">
                <img src="{{ asset('assets/images/favicon.webp') }}?v={{ filemtime(public_path('assets/images/favicon.webp')) }}" alt="Ben Kimim Logo" class="logo-image">
            </a>
        </div>
        <ul>
            <li><a href="{{ url('#') }}">Şimdi Oyna</a></li>
            <li><a href="{{ url('#howtoplay') }}">Nasıl Oynanır ?</a></li>
            <li><a href="{{ url('#about') }}">Hakkımızda</a></li>
            <li><a href="{{ url('#contact') }}">İletişim</a></li>
            <li><button onclick="document.getElementById('settingsSecBtn').click();">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><rect width="21" height="21" fill="none"></rect><path fill="#fff" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"></path></svg>
                <span>Profil</span>
            </button></li>
        </ul>
    </div>
</nav>