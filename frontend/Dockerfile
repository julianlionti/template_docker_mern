FROM node:14.15.4-alpine3.12

RUN npm i -G esbuild-linux-64@0.13.15
WORKDIR /app
COPY package*.json ./

RUN npm i

COPY . . 

CMD ["npm", "start"]