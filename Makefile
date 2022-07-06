.PHONY:
.SILENT:

build:
	go build -o ./.bin/app cmd/main.go

run: build 
	./.bin/app

build-image: 
			docker build -t kitabiserov/disl_group/disl-web-server:latest .
start-container:
		docker run --name disl-web-server -p 3000:3000 

