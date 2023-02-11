FROM node:16-alpine
COPY . .
WORKDIR /app
RUN npm install 
CMD [ "npm", "start" ]
EXPOSE 3000

