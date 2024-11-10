const fs = require("fs");
exports.command = 'make:middleware <name>';
exports.describe = 'Generate a new middleware';
exports.builder = {
    name: {
        describe: 'Name of the middleware',
        type: 'string',
        demandOption: true
    }
};

exports.handler = function (argv) {
    const fs = require('fs');
    const path = `./src/Http/Middleware/${argv.name}.ts`;

    // Generate a basic controller file
    const content = `
import Middleware from "@/lib/Http/Middleware";
import e from "express";

class ${argv.name} implements Middleware {
    handle(request: e.Request, response: e.Response, next: e.NextFunction) {
        // Define middleware implementation within here
        next();
    }

}
export default ${argv.name};
  `;


    fs.writeFileSync(path, content.trim());
    console.log(`Middleware created at ${path}`);
};
