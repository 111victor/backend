FROM node:20.3.1

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run start:dev && npm run parser"]


