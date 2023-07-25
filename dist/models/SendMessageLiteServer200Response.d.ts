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
/**
 *
 * @export
 * @interface SendMessageLiteServer200Response
 */
export interface SendMessageLiteServer200Response {
    /**
     *
     * @type {number}
     * @memberof SendMessageLiteServer200Response
     */
    code: number;
}
/**
 * Check if a given object implements the SendMessageLiteServer200Response interface.
 */
export declare function instanceOfSendMessageLiteServer200Response(value: object): boolean;
export declare function SendMessageLiteServer200ResponseFromJSON(json: any): SendMessageLiteServer200Response;
export declare function SendMessageLiteServer200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMessageLiteServer200Response;
export declare function SendMessageLiteServer200ResponseToJSON(value?: SendMessageLiteServer200Response | null): any;