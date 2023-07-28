FROM node:ubuntu
COPY . /app
RUN npm install
CMD node /app/index.js
