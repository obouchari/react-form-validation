import { isString, isArray, toNumber } from 'lodash';
import { defaultTo } from '../helpers';

/**
 * Min length allowed for a string or array
 * @param error[String]: custom error message.
 * @param param[String]: minimum value to compare to.
 * @param value[String]: value to evaluate.
 * @return [Boolean]: false if length is less than specified, true otherwise.
 */
export default function minLen(error, param, value) {
    const _min = toNumber(param);
    if (isNaN(_min)) {
        throw Error(`min rule expect a number as parameter instead got ${param}`);
    }
    if (isString(value) || isArray(value)) {
        return value.length < _min
            ? defaultTo(error, `The minimum length for this field is ${_min}`)
            : null;
    }
    return null;
}
