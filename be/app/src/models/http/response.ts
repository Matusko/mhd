/**
 * Created by matus on 8.1.2018.
 */

export class Response {
    statusCode: string;
    headers: any;
    body: string;

    constructor(statusCode: string, headers: any, body: any) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = JSON.stringify(body);
    }

}