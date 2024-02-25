FROM nginx:alpine

WORKDIR /html

COPY . /usr/share/nginx/html

CMD node app.js