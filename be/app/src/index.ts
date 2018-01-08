import {LambdaCallbackFcn} from "./types/LambdaCallbackFcn";
import {GetStopService} from "./service/get-stop.service";
import {Stop} from "./models/stop.type";
import {HttpResponseUtil} from "./util/http-response.util";
import {NextBus} from "./models/next-bus.model";


export let handler = (event: any, context: any, callback: LambdaCallbackFcn) => {

    const succClb = (buses: NextBus[] | null ): void => {
        if (buses) {
            callback(null, HttpResponseUtil.getSuccessResp(buses));
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