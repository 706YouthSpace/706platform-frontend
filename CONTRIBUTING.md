# 代码贡献指南

## git 规范

### 分支规范

分支分为三类：
* master：线上分支；
* feature：功能开发分支；
* fix：修复分支。

在开发时，先从 master 上新建一个分支，根据实际需要以 feature/* 或 fix/* 的方式命名。

开发完成后，将分支合并到 master 分支，自动触发 Github Actions 流水线，将最新版本更新到线上服务器。

发布完成后，删除开发时用到的分支。

### commit message

commit message 请遵守 [Conventional Commits specification](https://www.conventionalcommits.org)，项目内使用 husky 和 commitlint 检查 commit message，提交时如果工具报错，请按照提示进行修改。


## 代码规范

### 风格

代码风格为 [JavaScript Standard Style](https://github.com/standard/standard)，使用 eslint 检查代码，风格不符时工具会报错，请按照报错信息进行修改。

### 组件

* 组件命名请遵守 PascalCase
* 在模板中，使用组件时请遵守 KebabCase

## 项目结构


