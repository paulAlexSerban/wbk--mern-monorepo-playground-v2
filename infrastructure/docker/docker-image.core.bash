#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

PROJECT_PATH="../../"
PACKAGE_NAME=$(node -p "require('$PROJECT_PATH/package.json').name.split('/').pop()")
PROJECT_NAME=$(node -p "require('$PROJECT_PATH/package.json').name.split('/').join('__').split('@').pop()")
PROJECT_VERSION=$(node -p "require('$PROJECT_PATH/package.json').version")

echo "📦  Package $PROJECT_NAME@$PROJECT_VERSION"

# inspired from maven phases (https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)
PHASE=""

for arg in "$@"; do
    case $arg in
    --phase=*)
        PHASE="${arg#*=}"
        shift
        ;;
    esac
done

if [ -z "$PHASE" ]; then
    echo "Please provide the phase"
    exit 1
fi

function build() {
    echo "🚧  Building..."
    docker build \
        --tag $PROJECT_NAME:latest \
        -f ../../Dockerfile \
        ../../ # the monorepo root
    echo "✅  Build complete"
}

function run() {
    echo "🚀  Running..."
    docker run -it --rm --detach \
        --name $PROJECT_NAME $PROJECT_NAME:latest
    echo "✅  Run complete"
}

function stop() {
    echo "🛑  Stopping..."
    docker stop $(docker ps -q --filter ancestor=$PROJECT_NAME:latest)
    echo "✅  Stop complete"
}

function clean() {
    echo "🧹  Cleaning..."
    docker image rm $PROJECT_NAME:latest
    echo "✅  Clean complete"
}

${PHASE} && echo "[ ✅ ] Done" || echo "[ 🚫 ]Failed"
