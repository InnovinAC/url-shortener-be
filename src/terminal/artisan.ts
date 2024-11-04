#!/usr/bin/env node
import yargs from "yargs/yargs"
import {hideBin} from "yargs/helpers";

// TODO: Complete artisan and move to project root as js file
const argv = yargs(hideBin(process.argv)).argv;
if (!argv?.type) return;
if (argv?.type == 'controller') {
    // in progress
}
