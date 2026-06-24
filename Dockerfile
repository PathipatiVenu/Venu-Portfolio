FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm test   # 👈 add this here

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
