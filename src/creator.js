const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');
const chalk = require('chalk');

class Creator {
    constructor() {
        const store = memFs.create()
        this.fs = memFsEditor.create(store)
        this.options = {
            name: '',
            description: '',
        }
        // 当前根目录
        this.rootPath = path.resolve(__dirname, '../');
        // 模版目录
        this.tplDirPath = path.join(this.rootPath, 'template')
    }

    init() {
        console.log(chalk.green('koa cli start...'))
        this.ask().then((answers) => {
            this.options = Object.assign({}, this.options, answers)
            this.write()
        })
    }
    
    ask() {
        const prompt = []
        prompt.push({
            type: 'input',
            name: 'name',
            message: '请输入项目名称',
            validate(input) {
                if(!input) {
                    return '请输入项目名称'
                }
                if(fs.existsSync(input)) {
                    return '项目名已重复！'
                }
                return true
            }
        })
        prompt.push({
            type: 'input',
            name: 'description',
            message: '请输入项目描述',
        });
        return inquirer.prompt(prompt);
    }

    write() {
        console.log(chalk.green('koa cli compile start...'))
        const tplBuilder = require('./template.js');
        tplBuilder(this, this.options, () => {
            console.log(chalk.green('koa cli 构建完成'));
            console.log();
            console.log(chalk.grey(`开始项目:  cd ${this.options.name } && npm install`));
          });
    }

    getTplPath(file) {
        return path.join(this.tplDirPath, file);
    }
    
    copyTpl(file, to, data = {}) {
        const tplPath = this.getTplPath(file);
        this.fs.copyTpl(tplPath, to, data);
    }
    
    copy(file, to) {
        const tplPath = this.getTplPath(file);
        this.fs.copy(tplPath, to);
    }      
}

module.exports = Creator