import { ServiceClientCredentials, WebResource } from '@azure/ms-rest-js';
/**
 * Creates shared access signatures based on the connection string passed to the constructor.
 * This class is used by the protocol layer of the SDK to add authentication headers to each request.
 */
export declare class IoTHubTokenCredentials implements ServiceClientCredentials {
    private _connectionString;
    constructor(connectionString: string);
    /**
     * Adds an authorization header to the request object.
     * @param webResource The request object that needs its authorization header populated
     */
    signRequest(webResource: WebResource): Promise<WebResource>;
    /**
     * Gets the Azure IoT Hub instance name from the connection string
     */
    getHubName(): string;
}
