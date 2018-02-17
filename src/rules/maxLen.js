import { isString, isArray, toNumber } from 'lodash';
import { defaultTo } from '../helpers';

/**
 * Max length allowed for a string or array
 * @param error[String]: custom error message.
 * @param param[String]: maximum value to compare to.
 * @param value[String]: value to evaluate.
 * @return [Boolean]: false if length is more than specified, true otherwise.
 */
export default function maxLen(error, param, value) {
    const _max = toNumber(param);
    if (isNaN(_max)) {
        throw Error(`max rule expect a number as parameter instead got ${param}`);
    }
    if (isString(value) || isArray(value)) {
        return value.length > _max
            ? defaultTo(error, `The maximum length for this field is ${_max}`)
            : null;
    }
    return null;
}
