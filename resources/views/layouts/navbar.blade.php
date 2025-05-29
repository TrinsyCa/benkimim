<nav>
    <div class="nav-container">
        <div class="logo">
            <a href="{{ url('') }}">
                <img src="{{ asset('assets/images/favicon.webp') }}" alt="Ben Kimim Logo" class="logo-image">
            </a>
        </div>
        <ul>
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/about') }}">About</a></li>
            <li><a href="{{ url('/contact') }}">Contact</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li><a href="{{ url('/profile') }}">Profile</a></li>
        </ul>
    </div>
</nav>