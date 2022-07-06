package user

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

const (
	usersURL = "/users"
	userURL  = "/user/:uuid"
)

type handler struct {
}

func (h *handler) Register(router *httprouter.Router) {
	router.GET(usersURL, h.GetList)
	router.GET(usersURL, h.GetUserByUUID)
	router.POST(usersURL, h.CreateUser)
	router.PUT(usersURL, h.UpdateUser)
	router.PATCH(usersURL, h.PartiallyUpdateUser)
	router.DELETE(usersURL, h.DeleteUser)

}

func (h *handler) GetList(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Write([]byte("list"))
}

func (h *handler) CreateUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Write([]byte("createuser"))
}

func (h *handler) GetUserByUUID(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Write([]byte("GetUserByUUID"))
}

func (h *handler) UpdateUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Write([]byte("UpdateUser"))
}

func (h *handler) PartiallyUpdateUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Write([]byte("PartiallyUpdateUser"))
}

func (h *handler) DeleteUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Write([]byte("DeleteUser"))
}
