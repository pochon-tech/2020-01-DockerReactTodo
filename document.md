### 開発環境

- 不要のコンテナ群削除
```bash
$ docker system prune
```

- Dockerfile
```Dockerfile
FROM node:10-alpine

# config
ENV APP_PORT 8001
ENV APP_ROOT /app
EXPOSE $APP_PORT
WORKDIR $APP_ROOT
CMD [ "sh" ]

RUN apk update && \
    apk add git openssh curl jq && \
    curl -o- -L https://yarnpkg.com/install.sh | sh
```
- docker-compose.yml
```docker-compose.yml
version: '3.4'
x-logging:
  &default-logging
  driver: "json-file"
  options:
    max-size: "100k"
    max-file: "3"
services:

  app:
    build: ./
    logging: *default-logging
    volumes:
    - ./app/:/app/
    command: sh
    ports: 
      - "8001:8001"
```
- Image Build
```bash
$ docker-compose build
$ docker-compose ps -a
Name   Command   State   Ports
------------------------------
```
- React Install
```bash
$ docker-compose run --rm app sh -c "npm install -g create-react-app && create-react-app ."
```
- docker-compose.ymlの編集
```
-   command: sh
+   command: sh -c "yarn start"
```
- dev-server port変更（標準：3000
```
$ cd app
$ vi .env
PORT=8001
$ cd ..
```
- React Start
```bash
$ docker-compose up -d
$ docker-compose ps
```

### 参考サイト
Docker+Reactの環境構築
https://blog.web.nifty.com/engineer/2714
dev-server Port変更方法
https://qiita.com/urouro_net/items/dd7166f9728d08bc933b
https://github.com/facebook/create-react-app/issues/1083