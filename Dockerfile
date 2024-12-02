# Use a Node.js base image
FROM node:18.18.0  AS builder

# Set working directory inside the container
WORKDIR /app/client

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy local code to the container
COPY . .

RUN npm run build

FROM node:18.18.0  AS runner

WORKDIR /app/client

COPY --from=builder /app/client/package*.json ./
COPY --from=builder /app/client/tailwind.config.ts ./
COPY --from=builder /app/client/next.config.mjs ./
COPY --from=builder /app/client/dist ./dist
COPY --from=builder /app/client/public ./public
COPY --from=builder /app/client/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]