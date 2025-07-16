<?php

namespace App\Services;
use App\Models\Post;
use App\Repositories\PostRepository;

class PostService extends Service {

    public function __construct(
        private readonly PostRepository $postRepository
    )
    {
        parent::__construct($postRepository);
    }

    public function storeInService($data): Post
    {
        $validated = $data;
        $imagePath = null;
        if ($data->hasFile('image')) {
            $imagePath = $data->file('image')->store('images', 'public');
        }
        $validated['image'] = $imagePath;

        return $this->postRepository->store([
            'name' => $validated['name'],
            'content' => $validated['content'],
            'image' => $validated['image'] ? '/storage/' . $validated['image'] : null,
        ]);
    }
}
