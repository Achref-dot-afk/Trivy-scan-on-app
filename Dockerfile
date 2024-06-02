FROM node

WORKDIR /app

COPY . .

EXPOSE 3002
EXPOSE 3000

RUN cd Backend && npm install && cd ..
RUN cd Frontend && npm install && cd ..

CMD ["sh", "-c", "cd Backend && npm start & cd Frontend && npm start"]
