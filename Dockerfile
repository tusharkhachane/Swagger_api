FROM node:16.5.0-alpine

RUN mkdir -p /usr/src/NodeJs-API

WORKDIR /usr/src/NodeJs-API

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]
