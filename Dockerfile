FROM node:21-slim

LABEL maintainer="Gihan"

ARG WWWGROUP

#RUN addgroup app && adduser -S -G app app

#USER app

WORKDIR /var/www/html

#RUN chown -R app:app /var/www/html

ENV TZ=UTC

RUN echo 'Start application'

RUN echo 'End application'

CMD node dist/app.js