"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JettonPreviewToJSON = exports.JettonPreviewFromJSONTyped = exports.JettonPreviewFromJSON = exports.instanceOfJettonPreview = void 0;
const JettonVerificationType_1 = require("./JettonVerificationType");
/**
 * Check if a given object implements the JettonPreview interface.
 */
function instanceOfJettonPreview(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "decimals" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "verification" in value;
    return isInstance;
}
exports.instanceOfJettonPreview = instanceOfJettonPreview;
function JettonPreviewFromJSON(json) {
    return JettonPreviewFromJSONTyped(json, false);
}
exports.JettonPreviewFromJSON = JettonPreviewFromJSON;
function JettonPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'name': json['name'],
        'symbol': json['symbol'],
        'decimals': json['decimals'],
        'image': json['image'],
        'verification': (0, JettonVerificationType_1.JettonVerificationTypeFromJSON)(json['verification']),
    };
}
exports.JettonPreviewFromJSONTyped = JettonPreviewFromJSONTyped;
function JettonPreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'name': value.name,
        'symbol': value.symbol,
        'decimals': value.decimals,
        'image': value.image,
        'verification': (0, JettonVerificationType_1.JettonVerificationTypeToJSON)(value.verification),
    };
}
exports.JettonPreviewToJSON = JettonPreviewToJSON;