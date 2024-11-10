#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
    .commandDir('commands') // Loads commands from the "commands" directory
    .demandCommand(1, 'Please specify a command') // Ensures a command is specified
    .help()
    .version('1.0.0')
    .argv;
