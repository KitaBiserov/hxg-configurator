package webserv

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func InitServer() {
	r := gin.Default()

	api := r.Group("/api")

	r.Use(static.Serve("/", static.LocalFile("./web", true)))
	r.Static("/web", "web")
	api.GET("/hello", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{"msg": "world"})
	})

	r.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	r.Run(":3000")

}
