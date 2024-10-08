# Use a imagem oficial do Node.js como base
FROM node:18.19.0

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação irá rodar
EXPOSE 8080