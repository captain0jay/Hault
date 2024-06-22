# backend/Dockerfile
FROM node:18.17.0

WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Clear npm cache, force install dependencies, and upgrade npm
RUN npm cache clean --force && \
    npm install --force && \
    npm install -g npm@latest

# Copy the rest of the application code
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
