/**
 * Created by matus on 8.1.2018.
 */

export class Response {
    statusCode: string;
    body: string;

    constructor(statusCode: string, body: any) {
        this.statusCode = statusCode;
        this.body = JSON.stringify(body);
    }

}