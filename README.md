
### 开发运行环境
- [Node.js](https://nodejs.org)
- Npm
- Yarn `npm i -g yarn`

### 如何运行
1、在根目录下运行`yarn install`安装相关依赖；

注：在yarn install 时候，安装node-sass异常，解决办法如下(https://github.com/lmk123/blog/issues/28):

`set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install -g node-sass`

如果报`phantomjs`相关的错，可使用迅雷等下载工具将zip文件下载到相应的临时目录：

`https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-windows.zip`

2、运行`yarn start`

### 开发
可以使用[Angular CLI](https://cli.angular.io/)来生成代码，例如：

    ng generate component my-component

会生成这些文件：

    create src/app/my-component/my-component.component.html
    create src/app/my-component/my-component.component.ts
    update src/app/app.module.ts

或者在工程里复制`blank`目录，修改为自己的模块名，并修改`src/app/app.module.ts`将模块添加进去。

如果修改了`src/content/vendor.css`文件，需要运行`yarn run webpack:build`重新build一下vendor。

### 目录结构说明

### 测试
单元测试使用Karma+Jasmine，测试代码在`test/javascript`，运行如下命令进行测试：

    yarn test

### 代码规范
`tslint.json`配置代码规范，运行如下命令进行代码检查：

    yarn lint

运行如下命令自动处理不符合规范的代码(并不是所有的地方都会自动处理)：

    yarn lint:fix
    
### 发布
运行如下命令发布产品，发布的代码在`target/www`目录下。
    
    yarn run webpack:prod

