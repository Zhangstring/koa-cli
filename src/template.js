/*
 * @Author: zxj
 * @Date: 2020-12-01 16:48:30
 * @LastEditors: zxj
 * @LastEditTime: 2020-12-01 19:55:23
 * @FilePath: /koa-cli/src/template.js
 */

const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

module.exports = function(creator, options, callback) {
    const { name, description } = options;
  
    // 获取当前命令的执行目录，注意和项目目录区分
    const cwd = process.cwd();
    // 项目目录
    const projectPath = path.join(cwd, name);
    const srcPath = path.join(projectPath, 'src');
    const controllerPath = path.join(projectPath, 'src/controller');
    const routesPath = path.join(projectPath, 'src/routes');
    const servicesPath = path.join(projectPath, 'src/services');
  
    // 新建项目目录
    // 同步创建目录，以免文件目录不对齐
    fs.mkdirSync(projectPath);
    fs.mkdirSync(srcPath);
    fs.mkdirSync(controllerPath);
    fs.mkdirSync(routesPath);
    fs.mkdirSync(servicesPath);
  
    creator.copyTpl('packagejson', path.join(projectPath, 'package.json'), {
      name,
      description,
    });
  
    creator.copy('src/app.js', path.join(srcPath, 'app.js'));
    creator.copy('src/controller/index.js', path.join(controllerPath, 'index.js'));
    creator.copy('src/routes/index.js', path.join(routesPath, 'index.js'));
    creator.copy('src/services/index.js', path.join(servicesPath, 'index.js'));
  
    creator.fs.commit(() => {
      console.log(`${chalk.grey(`创建项目成功`)} ${chalk.green('✔ ')}`);

      callback();
    });
  }