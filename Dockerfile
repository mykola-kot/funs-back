FROM node:20.11.1-alpine3.19 AS app
WORKDIR /opt/node_app
COPY . .
RUN npm install && npm run build