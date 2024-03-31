FROM node:21-slim

LABEL maintainer="Kasun Gihan <kasungihan.dev@gmail.com>"

#RUN apt-get update 

# && apt-get install passwd -y

ENV TZ=UTC

WORKDIR /var/www/html

#RUN addgroup app && adduser -S -G app app

#RUN chown -R app:app /var/www/html

#USER app

COPY package*.json .
COPY . .

#RUN npm install

#CMD node dist/test.js

EXPOSE 8000

#CMD [ "node" ]

#RUN echo 'End application'