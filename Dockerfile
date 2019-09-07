FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run react-dev

EXPOSE 3306
EXPOSE 3001

CMD [ "npm", "run", "server" ]
