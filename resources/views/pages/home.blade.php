@extends('app')
@section('title', 'Anasayfa | Ben Kimim?')
@section('description', 'Ben Kimim? oyun platformuna hoş geldiniz! Burada arkadaşlarınızla birlikte eğlenceli oyunlar oynayabilir, yeni arkadaşlıklar kurabilir ve rekabet dolu anlar yaşayabilirsiniz. Hemen bir oyun oluşturun veya mevcut bir oyuna katılın!')
@section('keywords', 'Ben Kimim, oyun platformu, arkadaşlar, oyunlar, League of Legends, Valorant, oyun oluşturma, oyun katılma')
@section('author', 'Ben Kimim? Oyun Platformu')

@section('styles')
    <link rel="stylesheet" href="{{ asset('styles/home.css') }}?v={{ filemtime(public_path('styles/home.css')) }}">
    <link rel="stylesheet" href="{{ asset('resources/css/gamelist.css') }}>
@endsection

@section('content')
<section class="content">
    <h1 class="font-logo">Ben Kimim?</h1>
    @include('layouts.gamelist')
    <div class="home-content">
    </div>
</section>
@endsection

@section('scripts')
    <script src="{{ asset("scripts/gamelist.js") }}?v={{ filemtime(public_path('scripts/gamelist.js')) }}"></script>
    <script src="{{ asset("scripts/loadgame.js") }}?v={{ filemtime(public_path('scripts/loadgame.js')) }}"></script>
@endsection