# 代码贡献指南

## 文件结构

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src // 开发文件
│   ├── App.vue
│   ├── assets   // 静态资源
│   │   ├── images  // 图片资源
│   │   │   └── search.png
│   │   └── style // 样式文件
│   │       ├── common.less
│   │       └── variables.less
│   ├── components  // 全局公用组件
│   │   ├── PostLeftMenu.vue
│   │   ├── SvgIcon.vue
│   │   ├── TheFooter.vue
│   │   ├── TheHeader.vue
│   │   └── YouthUI
│   │       ├── YthInput.vue
│   │       └── index.js
│   ├── config  // 全局配置文件
│   │   ├── dev.conf.js
│   │   ├── index.js
│   │   └── prod.conf.js
│   ├── http
│   │   ├── modules  // 不同模块的 http 请求
│   │   │   └── module1.js
│   │   ├── axios.js
│   │   └── index.js
│   ├── icons  // 全局使用的 svg 图标
│   │   ├── index.js
│   │   └── svg
│   │       └── upload.svg
│   ├── main.js
│   ├── router  // 路由文件
│   │   ├── index.js
│   │   └── routes.js
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   ├── utils  // 全局公用的工具方法等
│   ├── views  // 页面组件
│   │   ├── Activity  // 复杂页面组件
│   │   │   ├── components
│   │   │   │   ├── ActivityItem.vue
│   │   │   │   └── Banner.vue
│   │   │   └── index.vue
│   │   └── Home.vue // 简单页面组件
│   └── vue-awesome-swiper.d.ts
├── tsconfig.json  // typescript 配置
└── vue.config.js  // vue 发布构建配置
```

### 风格

代码风格为 [JavaScript Standard Style](https://github.com/standard/standard)，使用 eslint 检查代码，风格不符时工具会报错，请按照报错信息进行修改。

## git 规范

### 分支规范

master：主分支，负责记录上线版本的迭代，该分支代码与线上代码是完全一致的。
develop：开发分支，该分支记录相对稳定的版本，所有的feature分支和bugfix分支都从该分支创建。其它分支为短期分支，其完成功能开发之后需要删除
feature/*：特性（功能）分支，用于开发新的功能，不同的功能创建不同的功能分支，功能分支开发完成并自测通过之后，需要合并到 develop 分支，之后删除该分支。
bugfix/*：bug修复分支，用于修复不紧急的bug，普通bug均需要创建bugfix分支开发，开发完成自测没问题后合并到 develop 分支后，删除该分支。
release/*：发布分支，用于代码上线准备，该分支从develop分支创建，创建之后由测试同学发布到测试环境进行测试，测试过程中发现bug需要开发人员在该release分支上进行bug修复，所有bug修复完后，在上线之前，需要合并该release分支到master分支和develop分支。
hotfix/*：紧急bug修复分支，该分支只有在紧急情况下使用，从master分支创建，用于紧急修复线上bug，修复完成后，需要合并该分支到master分支以便上线，同时需要再合并到develop分支。

### commit message

commit message 请遵守 [Conventional Commits specification](https://www.conventionalcommits.org)，项目内使用 husky 和 commitlint 检查 commit message，提交时如果工具报错，请按照提示进行修改。
