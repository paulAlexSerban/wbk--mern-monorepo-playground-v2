#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)


APP_NAME=""
# inspired from maven phases (https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)
PHASE=""

for arg in "$@"; do
    case $arg in
    --app-name=*)
        APP_NAME="${arg#*=}"
        shift
        ;;
    --phase=*)
        PHASE="${arg#*=}"
        shift
        ;;
    esac
done

if [ -z "$APP_NAME" ]; then
    echo "Please provide the app name"
    exit 1
fi

if [ -z "$PHASE" ]; then
    echo "Please provide the phase"
    exit 1
fi

ENV_FILE="../env/${APP_NAME}.compose.env"
COMPOSE_FILE_DEV="docker-compose.base-spa-fullstack.dev.yml"
COMPOSE_FILE_PROD="docker-compose.base-spa-fullstack.prod.yml"

function list() {
    echo "[ 📜 🐳 compose list ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} ps
}

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} up \
        --detach --build
    list
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} down \
        --volumes --rmi all
    list
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} logs \
        --follow
}

function up-prod() {
    echo "[ 🟢 🐳 compose up production build ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_PROD} up \
        --detach --build --wait
    list
}

function down-prod() {
    echo "[ 🛑 🐳 compose down production build ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_PROD} down \
        --volumes --rmi all
    list
}

function help() {
    echo "Available commands:"
    echo "  up - start the Docker container"
    echo "  down - stop the Docker container"
    echo "  logs - show the logs of the Docker container"
    echo "  up-prod - start the Docker container with production build"
    echo "  down-prod - stop the Docker container with production build"
    echo "  list - list the containers"
    echo "  help - show this help"
}

$PHASE && echo "[ ✅ ] Done" || echo "[ 🚫 ]Failed"
