package db

import (
	"context"
	"hxg-configurator/internal/config"
	"log"

	"github.com/go-redis/redis/v9"
)

type RedisClient struct {
	RedisClient *redis.Client
}

var ctx context.Context

func InitRedisDB(cfg *config.Config) *redis.Client {
	client := redis.NewClient(&redis.Options{
		Addr:     cfg.RedisAdd,
		Password: cfg.RedisPW,
		DB:       cfg.RedisDB,
	})

	return client
}

func (r RedisClient) GetValue(key string) (string, error) {

	value, err := r.RedisClient.Get(ctx, key).Result()
	if err != nil {
		log.Print("Cant Get Value")
	}

	return value, nil
}
