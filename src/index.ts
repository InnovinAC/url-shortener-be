// TODO: make middleware like laravel, with kernel, where middleware are registered, and this can be passed as a string
import e from "express";

import DatabaseBuilder from "./config/Database";
import Route from "./lib/Http/Route";
import RoutesExporter from "./routes/exporter";

const dbBuilder = new DatabaseBuilder();
dbBuilder.config({dbName: "url-shortener"}).build();

try {
    const app: e.Express = e()
    app.use(e.json());
    app.use(e.urlencoded({extended: true}));
    RoutesExporter.export();
    Route.invokeRoutes(app);
    app.listen(1000, () => {
        console.log("listening")
    })


    app.use((err, req, res, next) => {
        console.log("Error handler triggered");

        // Handle http-errors by checking `err.status`
        const status = err.status || 500;
        const message = err.message || 'Internal Server Error';

        res.status(status).json({
            error: {
                status,
                message,
            },
        });
    });
} catch (e) {
    console.error(e);
}
