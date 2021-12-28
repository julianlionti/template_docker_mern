FROM node:14.15.4-alpine3.12

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . . 

CMD ["npm", "start"]

