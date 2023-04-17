FROM node:18-slim as BUILDER
LABEL maintainer="adopet-challenge"

WORKDIR /usr/src/index

# Install app dependencies
COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:18.15-alpine

ARG NODE_ENV

WORKDIR /usr/src/index

COPY --from=BUILDER /usr/src/index/ ./

EXPOSE 3000

CMD [ "npm", "start" ]
