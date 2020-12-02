#!/usr/bin/env node

const Creator = require('../src/creator.js')
const package = require('../package.json')
const program = require('commander');

program.version(package.version, '-v, --version')
program
    .command('init')
    .action(() => {
        const project = new Creator()
        project.init()
    })
program.parse(process.argv);

