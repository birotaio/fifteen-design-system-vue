PACKAGE_NAME := $(shell cat package.json | grep "\"name\"" | cut -d\" -f4)
PACKAGE_VERSION = $(shell cat package.json | grep "\"version\"" | cut -d\" -f4)

tag:
	git tag $(PACKAGE_NAME)-$(PACKAGE_VERSION)
	git push origin $(PACKAGE_NAME)-$(PACKAGE_VERSION)

.ONESHELL:

release:
	@echo "\n\033[46m\033[30m RELEASE \033[0m\033[0m version \033[36m$(PACKAGE_VERSION)\033[0m of \033[36m$(PACKAGE_NAME)\033[0m...\n"
	$(eval GIT_STATUS = $(shell git status --porcelain=v1 2>/dev/null))
	@if [ -z "$(GIT_STATUS)" ]; then echo "Working dir is clean"; else echo "\x1b[31mYou have uncommited changes. Aborting.\x1b[0m"; exit 1; fi
	yarn test
	yarn build
	npm publish --access public
	make tag

beta:
	@echo "\n\033[46m\033[30m BETA RELEASE \033[0m\033[0m version \033[36m$(PACKAGE_VERSION)\033[0m of \033[36m$(PACKAGE_NAME)\033[0m...\n"
	yarn test
	yarn build
	npm publish --access public --tag beta
	make tag
