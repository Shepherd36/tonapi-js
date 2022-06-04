/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Annotations,
    AnnotationsFromJSON,
    AnnotationsToJSON,
} from '../models';

export interface GetAnnotationsByAccountRequest {
    account: string;
    limit?: number;
}

/**
 * AnnotationApi - interface
 * 
 * @export
 * @interface AnnotationApiInterface
 */
export interface AnnotationApiInterface {
    /**
     * Get annotations for account
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnnotationApiInterface
     */
    getAnnotationsByAccountRaw(requestParameters: GetAnnotationsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Annotations>>;

    /**
     * Get annotations for account
     */
    getAnnotationsByAccount(requestParameters: GetAnnotationsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Annotations>;

}

/**
 * 
 */
export class AnnotationApi extends runtime.BaseAPI implements AnnotationApiInterface {

    /**
     * Get annotations for account
     */
    async getAnnotationsByAccountRaw(requestParameters: GetAnnotationsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Annotations>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getAnnotationsByAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/annotation/getByAccount`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnnotationsFromJSON(jsonValue));
    }

    /**
     * Get annotations for account
     */
    async getAnnotationsByAccount(requestParameters: GetAnnotationsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Annotations> {
        const response = await this.getAnnotationsByAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

}