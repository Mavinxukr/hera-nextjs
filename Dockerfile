FROM node:14.16
WORKDIR /app
ADD package.json package.json
RUN npm install
ADD . .
RUN npm build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3001


