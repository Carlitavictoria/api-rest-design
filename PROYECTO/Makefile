generate:
	docker run --rm \
		-v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i /local/openapi/taskmanager.yaml \
		-g typescript-node \
		-o /local/out/typescript-node