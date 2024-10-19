FROM node:21-slim

LABEL maintainer="Kasun Gihan <kasungihan.dev@gmail.com>"

ENV TZ=UTC

RUN apt-get update -y

#RUN apt-get install nginx -y

WORKDIR /var/www/html/

#RUN groupadd -r app && useradd -r -g app app && \
#    chown -R app:app /var/www/html

#USER app

COPY package*.json .

COPY .babelrc .

RUN npm install

COPY . .

RUN npm run build

#FROM nginx:alpine AS nginx

#COPY nginx/nginx.conf /etc/nginx/conf.d/

#COPY  /var/www/html /usr/share/nginx/html

EXPOSE 3000

CMD ["npm", "start"]

#CMD ["nginx", "-g", "daemon off;"]