FROM node:21-slim

LABEL maintainer="Gihan"

#RUN apk add --no-cache bash

#RUN addgroup app && adduser -S -G app app

#USER app

WORKDIR /var/www/html

#RUN chown -R app:app /var/www/html

RUN node -v

ENV TZ=UTC

#RUN echo 'Start application'

#RUN echo 'End application'

CMD node dist/test.js

EXPOSE 8000