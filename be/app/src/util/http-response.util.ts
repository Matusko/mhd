import {Response} from "../models/http/response";
import {Message} from "../models/http/message";
/**
 * Created by matus on 8.1.2018.
 */

export class HttpResponseUtil {

    //TODO exact domains should not be in code
    //TODO is this right place for cors?
    static readonly headers: any = {
        "Access-Control-Allow-Origin": "http://cukan-bartko-mhd.s3-website-eu-west-1.amazonaws.com"
    };

    static getSuccessResp(obj: any): Response {
        return new Response('200', this.headers, obj);
    }

    static getNotFoundResp(): Response {
        return new Response('404', this.headers, new Message('Resource not found'));
    }

    static getErrorResp(err: any): Response {
        console.log("Error");
        console.log(err);
        return new Response('500', this.headers, new Message('Internal Error occured at ' + new Date().toISOString()));
    }
}