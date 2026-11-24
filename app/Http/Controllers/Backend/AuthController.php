<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);


        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();
            return redirect()->intended(route('dashboard'));
        }
        return redirect()->back()->withErrors([
            'email' => "invalid Credantial",

        ])->onlyInput('email');
    }

    public function registerUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:256',
            'email' => 'required | string |max:256|unique:users',
            'password' => ["required", 'confirmed', 'min:8'],
            'terms' => 'accepted',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        if ($user) {
            return Inertia::render('Backend/Login');
        }
        return redirect()->back()->withErrors([
            'message' => "registration failed"
        ]);
    }
    public function logoutUser(Request $request)
    {

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/backend/login');
    }
}
