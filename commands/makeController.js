exports.command = 'make:controller <name>';
exports.describe = 'Generate a new controller';
exports.builder = {
    name: {
        describe: 'Name of the controller',
        type: 'string',
        demandOption: true
    }
};

exports.handler = function (argv) {
    const fs = require('fs');
    const path = `./src/Http/Controllers/${argv.name}.ts`;

    // Generate a basic controller file
    const content = `
import Controller from "@/lib/Http/Controller";
import e from "express";
import ResponseHandler from "@/lib/response/ResponseHandler";

class ${argv.name} extends Controller {
    // This must be defined to make it pertain to this class and not root Controller
    protected methods: string[] =  Object.getOwnPropertyNames(${argv.name}.prototype)
    constructor(app: e.Express) {
        super(app);
    }


    // Define methods underneath
}

export default ${argv.name};
  `;


    fs.writeFileSync(path, content.trim());
    console.log(`Controller created at ${path}`);
};
