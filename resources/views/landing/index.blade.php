<!DOCTYPE html> 
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> 
<head> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <!-- CSRF Token --> 
    <meta name="csrf-token" content="{{ csrf_token() }}"> 
    <title>{{ config('app.name', 'Laravel') }}</title> 

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">

    <!-- Fonts --> 
    <link rel="dns-prefetch" href="//fonts.gstatic.com"> 
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> 
    <!-- Styles --> 
    <link href="{{ asset('css/app.css') }}?v={{ mt_rand() }}" rel="stylesheet"> 
</head> 
<body> 
    <div id="app"> 
        <router-view></router-view>
    </div> 




    <!-- Scripts --> 
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="{{ asset('js/app.js') }}?v={{ mt_rand() }}"></script> 
</body> 
</html>