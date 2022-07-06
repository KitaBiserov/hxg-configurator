package config

import (
	"github.com/ilyakaznacheev/cleanenv"
	"github.com/labstack/gommon/log"
)

type Config struct {
	Port     string `yaml:"port" env:"PORT" env-default:"8080"`
	RedisAdd string `yaml:"RedisAdd" env:"REDIS_DB_ADD" env-default:"5432"`
	RedisPW  string `yaml:"RedisPW" env:"REDIS_PW" env-default:" "`
	RedisDB  int    `yaml:"RedisDB" env:"RedisDB" env-default:"0"`
}

var Cfg *Config

func GetConfig() *Config {

	instance := &Config{}

	if err := cleanenv.ReadConfig("config.yml", instance); err != nil {
		help, _ := cleanenv.GetDescription(instance, nil)
		log.Info(help)
	}

	return instance
}
