import {toNumber} from 'lodash';
import {defaultTo, slice} from '../helpers';

/**
 * Range of numbers allowed
 * @param error[String]: custom error message.
 * @param params[String]: minimum, maximum values to compare to.
 * @param value[String]: value to evaluate.
 * @return [Boolean]: false if number is in the range of the max
 * and the min values specified, true otherwise.
 */
export default function range(error, params, value) {
    const [_min, _max] = slice(',')(params).map(val => toNumber(val));
    const _value = toNumber(value);
    if (isNaN(_min) || isNaN(_max)) {
        throw Error(`range rule expect a min number and a max number as parameters instead got ${params}`);
    }
    return isNaN(_value) || _value < _min || _value > _max
        ? defaultTo(error, `The value must be between ${_min} and ${_max}`)
        : null;
}
