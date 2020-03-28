FROM node:10

WORKDIR /usr/src/yoda/ui
COPY package*.json ./

RUN npm install --silent

RUN npm install -g @angular/cli
COPY . .
