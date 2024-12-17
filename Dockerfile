FROM node:22.12-bullseye-slim as core

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./lerna.json ./lerna.json
COPY ./.nxignore ./.nxignore

RUN yarn install
