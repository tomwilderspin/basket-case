all :


# environment start stop

run: stop
	docker-compose -f docker/docker-compose.yml up -d app

stop:
	docker-compose -f docker/docker-compose.yml stop
	docker-compose -f docker/docker-compose.yml rm -f

ps:
	docker-compose -f docker/docker-compose.yml ps

run-debug:
	docker-compose -f docker/docker-compose.yml run app

app-stop:
		docker-compose -f docker/docker-compose.yml stop app

test:
	docker-compose -f docker/docker-compose.yml run test
