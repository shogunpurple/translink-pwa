FROM node:8.15.1-alpine

ENV NODE_ENV "production"

RUN npm config set production
RUN npm install -g yarn

WORKDIR /app

COPY . /app

RUN yarn install --production

EXPOSE 3000

CMD [ "node", "./server/index.js" ]
