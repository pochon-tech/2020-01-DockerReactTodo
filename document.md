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
- HMRの有効化
```
$ cd app
$ vi .env
PORT=8001
CHOKIDAR_USEPOLLING=true
$ cd ..
```
- React Start
```bash
$ docker-compose up -d
$ docker-compose ps
```

### React Router

- install
```bash
$ yarn add react-transition-group react-router-dom
```
- `react-transition-group` : CSSアニメーションを扱うためのライブラリ
- `react-router-dom` : ルーティングを扱うためのライブラリ

- 必要なモジュール群
- `import { BrowserRouter as Router, Link, Route } from "react-router-dom"`
  - BrowserRouter
    - 画面遷移時にヒストリーAPIに履歴情報を追加してくれるコンポーネント
    - BrowserRouterの子要素にRouteとLinkを入れて使用
  - Link
    - aタグ
    - to要素に指定したlocaltion.pathnameへUrlを変更
  - Route 
    - localtion.pathnameが、path要素に指定したものとマッチしていた場合、componentに渡されたReactコンポーネントを描写
    
### コードレシピ

**配列の削除**
```javascript
  const arr1 = ['a','b','c','d']
  // 'b'（index=1）の削除例
  const index = 1
  // console.log(arr1.slice(0,index)) // ['a']
  // console.log(arr1.slice(index+1)) // ['c','d']
  const arr2 = [...arr1.slice(0,index), ...arr1.slice(index+1)]
  console.log(arr2)
```

**importとexport**
```javascript
  // components/main.js
  export default class Todo extends Component {}
  // index.js
  import { Todo } from './components/main' 
  // Attempted import error: 'Todo' is not exported from './components/main'.
  import Todo from './components/main'
  // Ok
```
- https://qiita.com/HIGAX/items/28f3bec814928b7395da
- export default class : そのclassがimportされるときにdefaultで呼ばれる
  - `import X from './xxx'`
- export class : どのclassをimportするか指定する必要
  - `import { X } from './xxx'`

### 参考サイト
**Docker+Reactの環境構築**
- https://blog.web.nifty.com/engineer/2714

**dev-server Port変更方法**
- https://qiita.com/urouro_net/items/dd7166f9728d08bc933b
- https://github.com/facebook/create-react-app/issues/1083

**DockerでのHMR設定**
- https://stackoverflow.com/questions/55874547/how-to-handle-hot-reloading-in-a-react-app-inside-docker-inside-wls

**React Todo入門**
- https://taroken.org/react-todo-app-for-beginners/
- https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048

**エラー集**
- https://note.crohaco.net/2018/react-errors-warnings/

**ReactComponentにおけるキーの指定**
- https://qiita.com/koba04/items/a4d23245d246c53cd49d

**React Routerを試す**
- https://qiita.com/katatu801/items/81253b54b6b6713e1332

**ReactでCSSアニメーションを扱う**
- https://qiita.com/koedamon/items/2665ea80f19589aa2f7d