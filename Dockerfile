# Use a imagem oficial do Node.js como base
FROM node:18.19.0

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --legacy-peer-deps
RUN npm install --save-dev @types/uuid
RUN npm install --save-dev @types/yup
RUN npm install --save-dev @types/axios
RUN npm install --save-dev @types/jsonwebtoken

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação irá rodar
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
