<?php

use App\Http\Controllers\Backend\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

Route::get('/', function () {
    return Inertia::render('Splash');
});

Route::prefix('/backend')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Backend/Auth/Login');
    });
    Route::get(
        '/register',
        function () {
            return Inertia::render('Backend/Auth/Register');
        }
    );
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::middleware('auth')->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Backend/Dashboard/Dashboard');
        })->name('dashboard');
    });

    Route::post('/logout', [AuthController::class, 'logoutUser'])->name('logout');
});
