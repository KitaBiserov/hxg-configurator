package backend

import (
	"github.com/rs/cors"
)

func CorsSettings() *cors.Cors {
	c := cors.New(cors.Options{
		AllowedMethods:     []string{},
		AllowedOrigins:     []string{},
		AllowCredentials:   true,
		AllowedHeaders:     []string{},
		OptionsPassthrough: true,
		ExposedHeaders:     []string{},
		Debug:              true,
	})
	return c
}
