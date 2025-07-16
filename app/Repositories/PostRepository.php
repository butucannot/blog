<?php

namespace App\Repositories;

use App\Models\Post;

class PostRepository extends Repository
{
    public function __construct(Post $model)
    {
        parent::__construct($model);
    }
}
