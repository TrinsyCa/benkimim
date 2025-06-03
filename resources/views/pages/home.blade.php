@extends('app')
@section('title', 'Anasayfa | Ben Kimim?')
@section('description', 'Ben Kimim? oyun platformuna hoş geldiniz! Burada arkadaşlarınızla birlikte eğlenceli oyunlar oynayabilir, yeni arkadaşlıklar kurabilir ve rekabet dolu anlar yaşayabilirsiniz. Hemen bir oyun oluşturun veya mevcut bir oyuna katılın!')
@section('keywords', 'Ben Kimim, oyun platformu, arkadaşlar, oyunlar, League of Legends, Valorant, oyun oluşturma, oyun katılma')
@section('author', 'Ben Kimim? Oyun Platformu')

@section('styles')
    <link rel="stylesheet" href="{{ asset('styles/home.css') }}?v={{ filemtime(public_path('styles/home.css')) }}">
    <link rel="stylesheet" href="{{ asset('styles/gamelist.css') }}?v={{ filemtime(public_path('styles/gamelist.css')) }}">
@endsection

@section('content')
<section class="content">
    <h1 class="font-logo">Ben Kimim?</h1>
    @include('layouts.gamelist')
    <div class="home-content">
        <p>Ben Kimim? ile eğlencenin sınırlarını zorla! Arkadaşlarınla veya yeni tanıştığın oyuncularla bir araya gel, zekanı konuştur ve unutulmaz anlar yaşa. League of Legends kahramanlarından popüler dizi ve film karakterlerine kadar her şeyi tahmin et, en iyi tahminci sen ol!</p>
        <br>
        <p>Platformumuzda League of Legends, Valorant, Stranger Things, Marvel evreni ve daha fazlasından ilham alan oyunlar seni bekliyor. Kendi oyun masanı oluştur, kategorini seç ve ister herkese açık ister özel odalarda rekabete başla. Sorular sor, ipuçlarını yakala ve liderlik tablosunda zirveye tırman!</p>
        <br>
        <p>Hemen bir oyuna katıl veya kendi maceranı başlat. Zekan, hızın ve eğlencenle Ben Kimim? dünyasında fark yarat!</p>
    </div>
</section>
@endsection

@section('scripts')
    <script src="{{ asset("scripts/gamelist.js") }}?v={{ filemtime(public_path('scripts/gamelist.js')) }}"></script>
    <script src="{{ asset("scripts/loadgame.js") }}?v={{ filemtime(public_path('scripts/loadgame.js')) }}"></script>
@endsection