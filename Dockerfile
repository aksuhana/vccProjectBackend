# backend/Dockerfile
FROM node:14-buster-slim

# Install Nginx and netcat
RUN apt-get update && apt-get install -y nginx netcat && rm -rf /var/lib/apt/lists/*

# Remove default Nginx site
RUN rm /etc/nginx/sites-enabled/default

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set the working directory for Node.js app
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Copy the entrypoint script and make it executable
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 8080, which Nginx listens on
EXPOSE 8080

# Use the entrypoint script as the command
CMD ["/entrypoint.sh"]
