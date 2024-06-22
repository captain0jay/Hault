# Use an official Node.js runtime as the base image
FROM node:18.17.0

# Set the working directory to the backend folder
WORKDIR /backend

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force && \
    rm -rf node_modules && \
    npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your application runs on
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
