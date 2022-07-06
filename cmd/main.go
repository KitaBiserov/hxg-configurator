package main

import (
	"hxg-configurator/internal/backend"
	"hxg-configurator/internal/config"

	"hxg-configurator/internal/db"
)

func main() {

	cfg := config.GetConfig()

	backend.InitServer(cfg)

	db.InitRedisDB(cfg)
}
