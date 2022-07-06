package backend

import (
	"context"
	"hxg-configurator/internal/config"
	"hxg-configurator/internal/db"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Server struct {
	Router  *echo.Echo
	Context context.Context
}

func InitServer(cfg *config.Config) *Server {

	router := echo.New()

	// DB BLOCK

	rdb := db.InitRedisDB(cfg)

	router.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		Root: "../fronted/public",
	}))

	router.Use(middleware.Logger())
	router.Use(middleware.Recover())
	router.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	router.GET("/api", getEquipment)

	router.Logger.Fatal(router.Start(cfg.Port))

	return &Server{
		Router: router,
	}
}
