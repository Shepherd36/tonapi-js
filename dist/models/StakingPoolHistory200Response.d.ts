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
import type { ApyHistory } from './ApyHistory';
/**
 *
 * @export
 * @interface StakingPoolHistory200Response
 */
export interface StakingPoolHistory200Response {
    /**
     *
     * @type {Array<ApyHistory>}
     * @memberof StakingPoolHistory200Response
     */
    apy: Array<ApyHistory>;
}
/**
 * Check if a given object implements the StakingPoolHistory200Response interface.
 */
export declare function instanceOfStakingPoolHistory200Response(value: object): boolean;
export declare function StakingPoolHistory200ResponseFromJSON(json: any): StakingPoolHistory200Response;
export declare function StakingPoolHistory200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingPoolHistory200Response;
export declare function StakingPoolHistory200ResponseToJSON(value?: StakingPoolHistory200Response | null): any;