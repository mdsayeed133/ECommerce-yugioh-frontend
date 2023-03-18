# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the source code
COPY . .

# Create a production build
RUN npm run build

# Install the serve package
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 3000

# Start the application in production mode
CMD ["serve", "-s", "build", "-l", "0.0.0.0:3000"]
