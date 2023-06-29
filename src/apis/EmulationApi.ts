/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountEvent,
  Event,
  GetBlock401Response,
  MessageConsequences,
  SendMessageRequest,
  Trace,
} from '../models/index';
import {
    AccountEventFromJSON,
    AccountEventToJSON,
    EventFromJSON,
    EventToJSON,
    GetBlock401ResponseFromJSON,
    GetBlock401ResponseToJSON,
    MessageConsequencesFromJSON,
    MessageConsequencesToJSON,
    SendMessageRequestFromJSON,
    SendMessageRequestToJSON,
    TraceFromJSON,
    TraceToJSON,
} from '../models/index';

export interface EmulateMessageToAccountEventRequest {
    accountId: string;
    sendMessageRequest: SendMessageRequest;
    acceptLanguage?: string;
}

export interface EmulateMessageToEventRequest {
    sendMessageRequest: SendMessageRequest;
    acceptLanguage?: string;
}

export interface EmulateMessageToTraceRequest {
    sendMessageRequest: SendMessageRequest;
}

export interface EmulateWalletMessageRequest {
    sendMessageRequest: SendMessageRequest;
    acceptLanguage?: string;
}

/**
 * EmulationApi - interface
 * 
 * @export
 * @interface EmulationApiInterface
 */
export interface EmulationApiInterface {
    /**
     * Emulate sending message to blockchain
     * @param {string} accountId account ID
     * @param {SendMessageRequest} sendMessageRequest bag-of-cells serialized to base64
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateMessageToAccountEventRaw(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvent>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToAccountEvent(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvent>;

    /**
     * Emulate sending message to blockchain
     * @param {SendMessageRequest} sendMessageRequest bag-of-cells serialized to base64
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateMessageToEventRaw(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToEvent(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;

    /**
     * Emulate sending message to blockchain
     * @param {SendMessageRequest} sendMessageRequest bag-of-cells serialized to base64
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateMessageToTraceRaw(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Trace>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToTrace(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Trace>;

    /**
     * Emulate sending message to blockchain
     * @param {SendMessageRequest} sendMessageRequest bag-of-cells serialized to base64
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmulationApiInterface
     */
    emulateWalletMessageRaw(requestParameters: EmulateWalletMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageConsequences>>;

    /**
     * Emulate sending message to blockchain
     */
    emulateWalletMessage(requestParameters: EmulateWalletMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageConsequences>;

}

/**
 * 
 */
export class EmulationApi extends runtime.BaseAPI implements EmulationApiInterface {

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToAccountEventRaw(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvent>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling emulateMessageToAccountEvent.');
        }

        if (requestParameters.sendMessageRequest === null || requestParameters.sendMessageRequest === undefined) {
            throw new runtime.RequiredError('sendMessageRequest','Required parameter requestParameters.sendMessageRequest was null or undefined when calling emulateMessageToAccountEvent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/v2/accounts/{account_id}/events/emulate`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendMessageRequestToJSON(requestParameters.sendMessageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountEventFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToAccountEvent(requestParameters: EmulateMessageToAccountEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvent> {
        const response = await this.emulateMessageToAccountEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToEventRaw(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters.sendMessageRequest === null || requestParameters.sendMessageRequest === undefined) {
            throw new runtime.RequiredError('sendMessageRequest','Required parameter requestParameters.sendMessageRequest was null or undefined when calling emulateMessageToEvent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/v2/events/emulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendMessageRequestToJSON(requestParameters.sendMessageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToEvent(requestParameters: EmulateMessageToEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.emulateMessageToEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToTraceRaw(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Trace>> {
        if (requestParameters.sendMessageRequest === null || requestParameters.sendMessageRequest === undefined) {
            throw new runtime.RequiredError('sendMessageRequest','Required parameter requestParameters.sendMessageRequest was null or undefined when calling emulateMessageToTrace.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/traces/emulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendMessageRequestToJSON(requestParameters.sendMessageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TraceFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateMessageToTrace(requestParameters: EmulateMessageToTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Trace> {
        const response = await this.emulateMessageToTraceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateWalletMessageRaw(requestParameters: EmulateWalletMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MessageConsequences>> {
        if (requestParameters.sendMessageRequest === null || requestParameters.sendMessageRequest === undefined) {
            throw new runtime.RequiredError('sendMessageRequest','Required parameter requestParameters.sendMessageRequest was null or undefined when calling emulateWalletMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/v2/wallet/emulate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendMessageRequestToJSON(requestParameters.sendMessageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageConsequencesFromJSON(jsonValue));
    }

    /**
     * Emulate sending message to blockchain
     */
    async emulateWalletMessage(requestParameters: EmulateWalletMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MessageConsequences> {
        const response = await this.emulateWalletMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}