<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/posts', [\App\Http\Controllers\Api\PostController::class, 'index']);
Route::post('/posts/store', [\App\Http\Controllers\Api\PostController::class, 'store'])->name('posts.store');
Route::get('/posts/{id}', [\App\Http\Controllers\Api\PostController::class, 'show']);
Route::delete('/posts/{id}', [\App\Http\Controllers\Api\PostController::class, 'destroy'])->name('posts.destroy');
