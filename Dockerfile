# ---- Production Image ----
FROM node:18.12.1-alpine3.17
RUN apk add --update git

# Remove any existing entrypoint or cmd instruction
ENTRYPOINT []
CMD []

# Set the working directory in the container
WORKDIR /app

# Copy the build output from the previous stage
COPY ./dist ./
COPY package*.json ./

# Install only production dependencies
RUN yarn

# Set the command to run your application
CMD [ "node", "./index.js" ]