import dotenv from 'dotenv';
import mongoose, {ConnectOptions, MongooseOptions} from 'mongoose';

dotenv.config();

const uri = process.env.MONGO_URI

/**
 * @class DataBase
 * Represents the main database connection and methods.
 */
class DataBase {
    private options: any;
    private mongoose;

    constructor(_options: any) {
        this.options = _options;
        this.mongoose = mongoose;
        this.mongoose.connect(uri, this.options as ConnectOptions)
        const connectEvents = [
            ['connecting', 'connecting to mongodb server via mongoose...'], ['connected', 'connecting to mongodb server via mongoose...'],
            ['open', 'database is active...'], ['disconnecting', 'disconnecting from mongodb server...'],
            ['disconnected', 'disconnected from mongodb server...'], ['close', 'closing connections with mongodb server...'],
            ['reconnected', 'reconnected to mongodb server...'],
        ]
        for (const event of connectEvents) {
            this.mongoose.connection.once(event[0], () => {
                console.log(event[1])
            })
        }
        this.mongoose.connection.once('error', (err) => {
            console.log('mongodb server error...')
            console.log(err)
        })

    }
}

class DatabaseBuilder {
    private options: ConnectOptions;

    /**
    * Configures database options
    * @param {MongooseOptions} options - specified options
     */
    config(options: ConnectOptions): DatabaseBuilder {
        this.options = options;
        return this;
    }

    /**
     * Builds into main {DataBase} class
     * @return Database
      */

    build(): DataBase  {
        return new DataBase(this.options);
    }
}

export default DatabaseBuilder;