"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationToJSON = exports.AnnotationFromJSONTyped = exports.AnnotationFromJSON = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
function AnnotationFromJSON(json) {
    return AnnotationFromJSONTyped(json, false);
}
exports.AnnotationFromJSON = AnnotationFromJSON;
function AnnotationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': (0, AccountAddress_1.AccountAddressFromJSON)(json['address']),
        'data': json['data'],
        'hash': json['hash'],
        'name': json['name'],
        'traceId': !(0, runtime_1.exists)(json, 'trace_id') ? undefined : json['trace_id'],
        'utime': json['utime'],
    };
}
exports.AnnotationFromJSONTyped = AnnotationFromJSONTyped;
function AnnotationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': (0, AccountAddress_1.AccountAddressToJSON)(value.address),
        'data': value.data,
        'hash': value.hash,
        'name': value.name,
        'trace_id': value.traceId,
        'utime': value.utime,
    };
}
exports.AnnotationToJSON = AnnotationToJSON;