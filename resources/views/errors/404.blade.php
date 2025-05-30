@extends('layouts.app')
@section('title', 'Anasayfa | Ben Kimim?')
@section('description', 'Ben Kimim? oyun platformuna hoş geldiniz! Burada arkadaşlarınızla birlikte eğlenceli oyunlar oynayabilir, yeni arkadaşlıklar kurabilir ve rekabet dolu anlar yaşayabilirsiniz. Hemen bir oyun oluşturun veya mevcut bir oyuna katılın!')
@section('keywords', 'Ben Kimim, oyun platformu, arkadaşlar, oyunlar, League of Legends, Valorant, oyun oluşturma, oyun katılma')
@section('author', 'Ben Kimim? Oyun Platformu')

@section('styles')
    <link rel="stylesheet" href="{{ asset('styles/home.css') }}?v={{ filemtime(public_path('styles/home.css')) }}">
    <link rel="stylesheet" href="{{ asset('styles/404.css') }}?v={{ filemtime(public_path('styles/home.css')) }}">
@endsection

@section('content')
<section class="content">
    <h1 class="font-logo">Ben Kimim?</h1>
    <h2>Site Geliştirme Aşamasında Olduğundan Dolayı Bazı Adreslerde Hata Alabilirsiniz.</h2>
    <a href="{{ url('/') }}" class="errorBtn">Anasayfaya Dön</a>
</section>
@endsection