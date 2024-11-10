import e from "express";

class ResponseHandler {

    static respond(res: e.Response, body: Record<string, any> | Array<Record<string, any>>, statusCode: number = 200) {
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "*");
        return res.json({
            body,
            statusCode
        })
    }

}

export default ResponseHandler;