# backend/Dockerfile
FROM node:18.17.0

WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Remove node_modules if it exists, clear npm cache, and install dependencies
RUN rm -rf node_modules && \
    npm cache clean --force && \
    npm install --legacy-peer-deps

# Upgrade npm to the latest version if necessary
RUN npm install -g npm@latest

# Copy the rest of the application code
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
