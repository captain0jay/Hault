# backend/Dockerfile
FROM node:18.17.0

WORKDIR /

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm", "start"]
