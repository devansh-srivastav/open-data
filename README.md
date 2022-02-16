# Team Inflow Prototype 1

## Prerequisites: This prototype has been developed in Next.JS

You need to have [Docker installed locally](https://docs.docker.com/get-docker/).

## Basic Commands

Build Production Image: `docker build  . -t open-data:latest`
Run Docker Image:  `docker run -e PORT=8080 -p 8080:8080 open-data`
