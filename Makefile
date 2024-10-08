run-migrations:
	@docker-compose -f ./docker-compose.local.yml exec funs_server npm run migration:up

run-seeds:
	@docker-compose -f ./docker-compose.local.yml exec funs_server npm run db:seed

migrate-and-seed: run-migrations run-seeds