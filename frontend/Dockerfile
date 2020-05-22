FROM node:alpine

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install

ADD babel.config.js .
ADD vue.config.js .

COPY . .

VOLUME [ "/app/src" ]
VOLUME [ "/app/public" ]

CMD ["npm", "run", "serve"]