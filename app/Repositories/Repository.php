<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str;

abstract class Repository
{
    protected Model $model;

    protected string $cachePrefix;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function store(array $data)
    {
        $entity = $this->model->create($data);

        return $entity;
    }

    public function update(string $id, array $data)
    {
        $entity = $this->model->findOrFail($id);
        $entity->update($data);

        return $entity;
    }

    public function delete(string $id): bool
    {
        $entity = $this->model->findOrFail($id);
        $deleted = $entity->delete();

        return $deleted;
    }

    public function restore(string $id): bool
    {
        $entity = $this->model->withTrashed()->findOrFail($id);
        return $entity->restore();
    }
    public function deleteBy(array $conditions, array $relations = []): bool
    {
        $entity = $this->findBy($conditions, $relations);
        if (!empty($entity)) {
            $deleted = $entity->delete();

            return $deleted;
        }
        return false;
    }

    public function one(string $id, array $relations = []): Model
    {
        return $this->model->with($relations)->findOrFail($id);
    }

    public function updateOrCreate(array $data, array $where): Model
    {
        $entity = $this->model->updateOrCreate($where, $data);

        return $entity;
    }

    public function findBy(array $conditions, array $relations = []): ?Model
    {
        return $this->model->where($conditions)->with($relations)->first();
    }

    public function findCoupleBy(array $conditions, array $relations = [])
    {
        return $this->model->where($conditions)->with($relations)->get();
    }

    public function findOrCreate(array $conditions): Model
    {
        $entity = $this->model->firstOrCreate($conditions);

        return $entity;
    }

    public function findWithPagination(
        array $filters = [],
        array $where = [],
        array $search = [],
        array $with = [],
        string $orderBy = 'created_at',
        string $direction = 'desc',
        int $perPage = 15,
        bool $withTrashed = false,
    ): LengthAwarePaginator
    {
        $query = $this->model->query();
        $table = $this->model->getTable();

        if ($withTrashed) {
            $query->withTrashed();
        }

        foreach ($where as $field => $value) {
            if (!empty($value)) {
                $query->where($field, $value);
            }
        }

        if (!empty($filters['search']) && !empty($search)) {
            $term = strtolower($filters['search']);

            $query->where(function ($q) use ($search, $term) {
                foreach ($search as $path) {

                    $parts = explode('.', $path);
                    $column = array_pop($parts);
                    $relationPath = implode('.', $parts);

                    if ($relationPath === '') {
                        $q->orWhereRaw("CAST({$column} AS TEXT) ILIKE ?", ["%{$term}%"]);
                    }

                    else {
                        $q->orWhereHas($relationPath, function ($rel) use ($column, $term) {
                            $rel->whereRaw("CAST({$column} AS TEXT) ILIKE ?", ["%{$term}%"]);
                        });
                    }
                }
            });
        }

        if (!empty($with)) {
            $query->with($with);
        }

        if (Str::contains($orderBy, '.')) {
            [$relationKey, $column] = explode('.', $orderBy, 2);

            if (method_exists($this->model, $relationKey)) {
                $rel = $this->model->{$relationKey}();

                // BelongsTo
                if ($rel instanceof BelongsTo) {
                    $related     = $rel->getRelated()->getTable();
                    $foreignKey  = $rel->getForeignKeyName();

                    $query->orderByRaw(
                        "(SELECT {$column} FROM {$related} WHERE {$related}.id = {$table}.{$foreignKey}) {$direction}"
                    );
                }
                // HasOne
                elseif ($rel instanceof HasOne) {
                    $related     = $rel->getRelated()->getTable();
                    $foreignKey  = $rel->getForeignKeyName();
                    $localKey    = $rel->getLocalKeyName();

                    $query->orderByRaw(
                        "(SELECT {$column} FROM {$related} WHERE {$related}.{$foreignKey} = {$table}.{$localKey} LIMIT 1) {$direction}"
                    );
                }
            }
        } else {
            $query->orderBy($orderBy, $direction);
        }

        return $query->paginate($perPage);
    }
}
