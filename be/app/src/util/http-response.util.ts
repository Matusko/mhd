import {Response} from "../models/http/response";
import {Message} from "../models/http/message";
/**
 * Created by matus on 8.1.2018.
 */

export class HttpResponseUtil {

    static getSuccessResp(obj: any): Response {
        return new Response('200', obj)
    }

    static getNotFoundResp(): Response {
        return new Response('404', new Message('Resource not found'))
    }

    static getErrorResp(err: any): Response {
        console.log("Error");
        console.log(err);
        return new Response('500', new Message('Internal Error occured at '  + new Date().toISOString()))
    }
}