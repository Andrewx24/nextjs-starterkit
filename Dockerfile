# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock/pnpm-lock.yaml files to the container
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of your application code to the container
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "run", "start"]
