# 1. For build React app
FROM node:lts AS development
# Set working directory
WORKDIR /app
#
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
# Same as npm install
RUN npm i --legacy-peer-deps
COPY . /app
CMD [ "npm", "run", "dev" ]
# FROM development AS build
# RUN npm run build