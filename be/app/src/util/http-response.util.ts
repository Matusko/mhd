import {Response} from "../models/http/response";
import {Message} from "../models/http/message";
/**
 * Created by matus on 8.1.2018.
 */

export class HttpResponseUtil {

    //TODO exact domains should not be in code
    //TODO is this right place for cors?
    static setRespHeaders(reqHeaders: any): any {

        if(reqHeaders.origin == undefined || reqHeaders.origin == null) {
            return {
                "Access-Control-Allow-Origin": "*"
            };
        }

        else if(reqHeaders.origin == "http://cukan-bartko-mhd.s3-website-eu-west-1.amazonaws.com" || reqHeaders.origin == "https://cukan-bartko-mhd.s3-website-eu-west-1.amazonaws.com") {

            return {
                "Access-Control-Allow-Origin": reqHeaders.origin
            };
        }

        else {

            return {};
        }


    };

    static getSuccessResp(obj: any, reqHeaders: any): Response {
        return new Response('200', HttpResponseUtil.setRespHeaders(reqHeaders), obj);
    }

    static getNotFoundResp(reqHeaders: any): Response {
        return new Response('404', HttpResponseUtil.setRespHeaders(reqHeaders), new Message('Resource not found'));
    }

    static getErrorResp(err: any, reqHeaders: any): Response {
        console.log("Error");
        console.log(err);
        return new Response('500', HttpResponseUtil.setRespHeaders(reqHeaders), new Message('Internal Error occured at ' + new Date().toISOString()));
    }
}