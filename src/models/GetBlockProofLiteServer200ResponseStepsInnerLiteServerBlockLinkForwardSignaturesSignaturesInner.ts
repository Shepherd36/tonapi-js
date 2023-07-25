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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
 */
export interface GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner {
    /**
     * 
     * @type {string}
     * @memberof GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
     */
    nodeIdShort: string;
    /**
     * 
     * @type {string}
     * @memberof GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
     */
    signature: string;
}

/**
 * Check if a given object implements the GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner interface.
 */
export function instanceOfGetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nodeIdShort" in value;
    isInstance = isInstance && "signature" in value;

    return isInstance;
}

export function GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSON(json: any): GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner {
    return GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSONTyped(json, false);
}

export function GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nodeIdShort': json['node_id_short'],
        'signature': json['signature'],
    };
}

export function GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerToJSON(value?: GetBlockProofLiteServer200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'node_id_short': value.nodeIdShort,
        'signature': value.signature,
    };
}
