<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostStoreRequest;
use App\Models\Post;
use App\Services\PostService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct(
        private readonly PostService $postService,
    )
    { }

    public function index(): Collection
    {
        return $this->postService->all();
    }

    public function store(PostStoreRequest $request): JsonResponse
    {
        $post = $this->postService->storeInService($request->validated());

        return ok(['message' => 'Пост создан', 'post' => $post]);
    }

    public function show(string $id): JsonResponse
    {
        return response()->json($this->postService->findBy(['id' => $id]));
    }

    public function update(Request $request, string $id): void
    {
        //
    }

    public function destroy($id): JsonResponse
    {
        $this->postService->delete($id);

        return response()->json(['message' => 'Deleted']);
    }
}
