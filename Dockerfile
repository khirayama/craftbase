FROM node:20-alpine

WORKDIR /usr/server

COPY ./package.json ./
RUN npm install

COPY ./ .

RUN npm run build
ENV NODE_ENV=production

CMD ["npm", "run", "start"]
