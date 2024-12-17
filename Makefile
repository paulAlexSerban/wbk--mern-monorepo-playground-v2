DOCKER_DIR := ./infrastructure/docker

define spa-fullstack-compose_template
$(1)_compose-up:
	@bash $(DOCKER_DIR)/docker-compose.base-spa-fullstack.bash --phase=up --app-name=$(1)

$(1)_compose-up-prod:
	@bash $(DOCKER_DIR)/docker-compose.base-spa-fullstack.bash --phase=up-prod --app-name=$(1)

$(1)_compose-down:
	@bash $(DOCKER_DIR)/docker-compose.base-spa-fullstack.bash --phase=down --app-name=$(1)

$(1)_compose-down-prod:
	@bash $(DOCKER_DIR)/docker-compose.base-spa-fullstack.bash --phase=down-prod --app-name=$(1)
endef

$(eval $(call spa-fullstack-compose_template,birthday-buddy))

birthday-buddy_compose-up:
	@bash $(DOCKER_DIR)/docker-compose.base-spa-fullstack.bash --phase=up --app-name=birthday-buddy

# Core build 
core_build:
	@bash $(DOCKER_DIR)/docker-image.core.bash --phase=build