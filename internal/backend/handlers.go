package backend

import (
	"hxg-configurator/internal/db"

	"github.com/labstack/gommon/log"
)

func (s Server) getEquipment(db *db.RedisClient, key string) error {

	equipment, err := db.GetValue(key)

	if err != nil {
		log.Infof("Cant get Value from Handler")
	}

	return s.Context.

}
