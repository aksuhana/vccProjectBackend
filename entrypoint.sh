#!/bin/bash
set -e

# Start the Node.js server on port 3001 in the background
echo "Starting Node.js server on port 3001..."
node server.js &
NODE_PID=$!

# Wait for the Node.js server to be ready by testing port 3001 (using netcat)
echo "Waiting for Node.js server to launch on port 3001..."
n=0
max=30
until nc -z localhost 3001; do
  sleep 1
  n=$((n+1))
  if [ $n -ge $max ]; then
    echo "Node.js server failed to start within expected time."
    exit 1
  fi
done
echo "Node.js server is up."

# Start Nginx in the foreground to listen on port 8080
echo "Starting Nginx on port 8080..."
nginx -g 'daemon off;'
