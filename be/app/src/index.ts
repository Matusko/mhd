import {LambdaCallbackFcn} from "./types/LambdaCallbackFcn";
import {GetStopService} from "./service/get-stop.service";
import {HttpResponseUtil} from "./util/http-response.util";
import {NextBus} from "./models/next-bus.model";


export let handler = (event: any, context: any, callback: LambdaCallbackFcn) => {

    console.log("handler invoked event: " + event + " and context: " + context);

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

    if (event.queryStringParameters && event.queryStringParameters.stop) {

        let query = '{getStopInfo(stopName:"' + event.queryStringParameters.stop + '")}';

        GetStopService.getStop(query, succClb, errClb);
    }

};