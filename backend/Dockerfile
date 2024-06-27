# Cria uma imagem baseada na versão 20 (LTS) do node
FROM node:20-alpine
# Cria um diretório onde a instalação será instalada
RUN mkdir -p /app
# Muda o diretório atual
WORKDIR /app
# Copia o package.json para diretório atual
COPY package.json ./
# Instala as dependências definidas no package.json
RUN npm install
# Copia todo o código necessário para rodar a aplicação
COPY ./ ./
# Expõe a porta em que a aplicação irá rodar
EXPOSE 4455
# Inicializa a aplicação
CMD [ "sh", "./start.sh" ]