FROM node:20.3.1

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x ./start.sh

CMD ./start.sh
