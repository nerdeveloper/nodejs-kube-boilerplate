FROM node:current-alpine

RUN mkdir -p /usr/src/app
RUN chown node:node /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

EXPOSE 3000 9229

WORKDIR /usr/src/app
USER node

COPY package*.json ./
RUN npm install --quiet --no-progress && npm cache clean --force

COPY . .

CMD ["node", "server.js"]
