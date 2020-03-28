FROM node:10
# Create app directory
WORKDIR /usr/src/yoda/ui
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 4200
CMD [ "ng", "serve" ]
