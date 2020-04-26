import * as msRest from '@azure/ms-rest-js';
export declare type DigitalTwinGetResponse = {
    body: any;
    _response: msRest.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};
export declare class DTClient extends msRest.ServiceClient {
    apiVersion?: string;
    credentials: msRest.ServiceClientCredentials;
    constructor(connString: string);
    getDigitalTwin(digitalTwinId: string): Promise<DigitalTwinGetResponse>;
}
