"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const uri = process.env.MONGO_URI;
/**
 * @class DataBase
 * Represents the main database connection and methods.
 */
class DataBase {
    constructor(_options) {
        this.options = _options;
        this.mongoose = mongoose_1.default;
        this.mongoose.connect(uri, this.options);
        const connectEvents = [
            ['connecting', 'connecting to mongodb server via mongoose...'], ['connected', 'connecting to mongodb server via mongoose...'],
            ['open', 'database is active...'], ['disconnecting', 'disconnecting from mongodb server...'],
            ['disconnected', 'disconnected from mongodb server...'], ['close', 'closing connections with mongodb server...'],
            ['reconnected', 'reconnected to mongodb server...'],
        ];
        for (const event of connectEvents) {
            this.mongoose.connection.once(event[0], () => {
                console.log(event[1]);
            });
        }
        this.mongoose.connection.once('error', (err) => {
            console.log('mongodb server error...');
            console.log(err);
        });
    }
}
class DatabaseBuilder {
    /**
    * Configures database options
    * @param {MongooseOptions} options - specified options
     */
    config(options) {
        this.options = options;
        return this;
    }
    /**
     * Builds into main {DataBase} class
     * @return Database
      */
    build() {
        return new DataBase(this.options);
    }
}
exports.default = DatabaseBuilder;
