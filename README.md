# ts-project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 项目说明

本项目采用 Class Api 方式编写程序逻辑

### Class Api 依赖插件

参考：[vue-property-decorator](vue-property-decorator)

```shell
PS user> yarn add vue-property-decorator vue-class-component -D
```

### 采用 Sass 预编译样式

```shell
PS user> yarn add dart-sass sass sass-loader -D
```

### 部署

```shell
wget https://nodejs.org/dist/v8.11.4/node-v12.16.0-linux-x64.tar.gz


ln -s /usr/local/node12.16.0/bin/node  /usr/local/bin/node

ln -s /usr/local/node12.16.0/bin/npm  /usr/local/bin/npm

ln -s /usr/local/node12.16.0/bin/pm2  /usr/local/bin/pm2

ln -s /usr/local/node12.16.0/bin/yarn  /usr/local/bin/yarn

yarn

pm2 start yarn --interpreter bash --name "ts-pro" -- start
```
