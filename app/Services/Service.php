<?php

namespace App\Services;

namespace App\Services;

use App\Repositories\BaseRepository;
use App\Repositories\Repository;
use Illuminate\Database\Eloquent\Collection;

abstract class Service
{
    protected Repository $repository;

    public function __construct(Repository $repository)
    {
        $this->repository = $repository;
    }

    public function all(): Collection
    {
        return $this->repository->all();
    }

    public function store(array $data)
    {
        return $this->repository->store($data);
    }

    public function one($id, array $relations = [])
    {
        return $this->repository->one($id, $relations);
    }

    public function update($id, array $data)
    {
        return $this->repository->update($id, $data);
    }

    public function delete(string $id): bool
    {
        return $this->repository->delete($id);
    }

    public function restore(string $id): bool
    {
        return $this->repository->restore($id);
    }

    public function deleteBy(array $conditions, array $relations = [])
    {
        return $this->repository->deleteBy($conditions, $relations);
    }

    public function updateOrCreate(array $data, array $where)
    {
        return $this->repository->updateOrCreate($data, $where);
    }

    public function findBy(array $conditions, array $relations = [])
    {
        return $this->repository->findBy($conditions, $relations);
    }

    public function findCoupleBy(array $conditions, array $relations = [])
    {
        return $this->repository->findCoupleBy($conditions, $relations);
    }

    public function findOrCreate(array $conditions)
    {
        return $this->repository->findOrCreate($conditions);
    }

    public function findWithPagination(array $filters = [], array $where = [], array $search = [], array $with = [], string $orderBy = 'created_at', string $direction = 'desc', int $perPage = 15)
    {
        return $this->repository->findWithPagination(
            $filters,
            $where,
            $search,
            $with,
            $orderBy,
            $direction,
            $perPage
        );
    }
}

