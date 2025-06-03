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
        </ul>
    </div>
</nav>