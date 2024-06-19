# Makefile
.PHONY: install start stop

install:
    docker-compose build

start:
    docker-compose up

stop:
    docker-compose down
