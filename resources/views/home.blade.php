@extends('layouts.app')
@section('title', 'Anasayfa | Ben Kimim?')
@section('description', 'Ben Kimim? oyun platformuna hoş geldiniz! Burada arkadaşlarınızla birlikte eğlenceli oyunlar oynayabilir, yeni arkadaşlıklar kurabilir ve rekabet dolu anlar yaşayabilirsiniz. Hemen bir oyun oluşturun veya mevcut bir oyuna katılın!')
@section('keywords', 'Ben Kimim, oyun platformu, arkadaşlar, oyunlar, League of Legends, Valorant, oyun oluşturma, oyun katılma')
@section('author', 'Ben Kimim? Oyun Platformu')

@section('styles')
    <link rel="stylesheet" href="{{ asset('styles/home.css') }}">
@endsection

@section('content')
<section class="content">
    <h1 class="font-logo">Ben Kimim?</h1>
    @include('gamelist')
    <div class="home-content">
        <p>Ben Kimim? oyun platformuna hoş geldiniz! Burada arkadaşlarınızla birlikte eğlenceli oyunlar oynayabilir, yeni arkadaşlıklar kurabilir ve rekabet dolu anlar yaşayabilirsiniz. Hemen bir oyun oluşturun veya mevcut bir oyuna katılın!</p>
        <p>Platformumuz, League of Legends, Valorant ve daha birçok popüler oyunu destekler. Oyunlarınızı kolayca yönetin, arkadaşlarınızla iletişim kurun ve en iyi oyun deneyimini yaşayın.</p>
        <p>Hemen başlayın ve oyun dünyasına adım atın!</p>
    </div>
</section>
@endsection