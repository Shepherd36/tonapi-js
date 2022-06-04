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

import { exists, mapValues } from '../runtime';
import {
    NftItem,
    NftItemFromJSON,
    NftItemFromJSONTyped,
    NftItemToJSON,
} from './NftItem';

/**
 * 
 * @export
 * @interface NftForSale
 */
export interface NftForSale {
    /**
     * 
     * @type {NftItem}
     * @memberof NftForSale
     */
    nft: NftItem;
    /**
     * 
     * @type {string}
     * @memberof NftForSale
     */
    saleContract: string;
}

export function NftForSaleFromJSON(json: any): NftForSale {
    return NftForSaleFromJSONTyped(json, false);
}

export function NftForSaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftForSale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nft': NftItemFromJSON(json['nft']),
        'saleContract': json['sale_contract'],
    };
}

export function NftForSaleToJSON(value?: NftForSale | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nft': NftItemToJSON(value.nft),
        'sale_contract': value.saleContract,
    };
}
