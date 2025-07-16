<?php

use Illuminate\Http\JsonResponse;

if (!function_exists('ok')) {
    function ok(array $data = [], int $status = 200): JsonResponse
    {
        return response()->json($data, $status);
    }
}
