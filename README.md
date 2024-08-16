# Asaas Tech lab - Node
Template para desenvolvimento de API em Node.js<br><br>

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
