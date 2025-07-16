<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    protected $fillable = [
        'name',
        'image',
        'content',
        'is_liked',
        'created_at',
    ];
    use SoftDeletes;
}
