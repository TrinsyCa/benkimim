<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title','Ben Kimim?')</title>
    
    <!-- Static Styles -->
    <link rel="icon" href="{{ asset('assets/images/favicon.webp') }}?v={{ filemtime(public_path('assets/images/favicon.webp')) }}" type="image/webp">
    <link rel="stylesheet" href="{{ asset('styles/theme.css') }}?v={{ filemtime(public_path('styles/theme.css')) }}">
    <link rel="stylesheet" href="{{ asset('styles/app.css') }}?v={{ filemtime(public_path('styles/app.css')) }}">
    <link rel="stylesheet" href="{{ asset('styles/navbar.css') }}?v={{ filemtime(public_path('styles/navbar.css')) }}">
    <link rel="stylesheet" href="{{ asset('styles/footer.css') }}?v={{ filemtime(public_path('styles/footer.css')) }}">
    <link rel="stylesheet" href="{{ asset('styles/gamelist.css') }}?v={{ filemtime(public_path('styles/gamelist.css')) }}">
    <!-- Static Styles -->

    <!-- Dynamic Styles -->
    @yield('styles')
    <!-- Dynamic Styles -->
</head>
<body>
    @include('layouts.navbar')
    @yield('content')
    @include('layouts.footer')
</body>
</html>