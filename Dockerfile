FROM node:alpine

RUN mkdir -p /usr/src/api-netara && chown -R node:node /usr/src/api-netara

WORKDIR /usr/src/api-netara

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

#EXPOSE 3000
EXPOSE 8078
