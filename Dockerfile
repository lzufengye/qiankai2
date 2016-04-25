FROM node

WORKDIR /app

COPY ./ /app/

RUN npm install --production

EXPOSE 8080

ENTRYPOINT ["/app/run"]
