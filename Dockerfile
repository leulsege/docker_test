FROM node:alpine
COPY . /app
CMD node /app/index.js
