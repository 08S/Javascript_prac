FROM node:latest

COPY . /app

WORKDIR /app

RUN make /app

EXPOSE 8000

CMD ["node", "app/practice.html"]
