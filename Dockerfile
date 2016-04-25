FROM node

WORKDIR /app

COPY ./ /app/

RUN npm install express compression

EXPOSE 8080

#CMD ["/app/run"]
ENTRYPOINT ["/app/run"]
