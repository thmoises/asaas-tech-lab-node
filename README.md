# Asaas Tech lab - Node

## Desafio

## Doc
https://sequelize.org/docs/v6/
<br>
Gerar Model: ```npx sequelize-cli model:generate --name Test --attributes name:string,...```
<br>
Migrate: ```npx sequelize-cli db:migrate```
<br>
Seed: ```npx sequelize-cli seed:generate --name test```, run ```npx sequelize-cli db:seed:all```

## Docker
Rodar aplicação:
```ssh
docker-compose up
```
### Comando uteis:
<br>
Delete todos os containers:
```ssh
docker rm -vf $(docker ps -aq)
```
<br>
Delete todas as imagens:
```ssh
docker rmi -f $(docker images -aq)
```

## Ambiente
Node
```v18.19.0```
<br>
NPM
```10.2.3```
