import {LambdaCallbackFcn} from "./types/LambdaCallbackFcn";
import {GetStopService} from "./service/get-stop.service";
import {Stop} from "./models/stop.type";
import {HttpResponseUtil} from "./util/http-response.util";


export let handler = (event: any, context: any, callback: LambdaCallbackFcn) => {

    const succClb = (stopObj: Stop | null ): void => {
        if (stopObj) {
            callback(null, HttpResponseUtil.getSuccessResp(stopObj));
        } else {
            callback(null, HttpResponseUtil.getNotFoundResp());
        }
    };

    const errClb = (err: any): void => {
        callback(null, HttpResponseUtil.getErrorResp(err));
    };

    if (event.queryStringParameters && event.queryStringParameters.query) {
        GetStopService.getStop(event.queryStringParameters.query, succClb, errClb);
    }

};