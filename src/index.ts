// TODO: make middleware like laravel, with kernel, where middleware are registered, and this can be passed as a string
import e from "express";

import DatabaseBuilder from "./config/Database";
import MainController from "./Http/Controllers/MainController";

const dbBuilder = new DatabaseBuilder();
dbBuilder
    .config({dbName: "url-shortener"})
    .build();


try {
    const app: e.Express = e()
    app.use(e.json());
    app.use(e.urlencoded({extended: true}));
    new MainController(app);

    app.listen(1000, () => {
        console.log("listening")
    })
        // .
} catch (e) {
    console.error(e);
}
