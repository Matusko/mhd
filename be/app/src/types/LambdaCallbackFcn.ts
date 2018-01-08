/**
 * Created by matus on 8.1.2018.
 */

export interface LambdaCallbackFcn {
    (err: AWS.AWSError | null, message?: any): void;
}