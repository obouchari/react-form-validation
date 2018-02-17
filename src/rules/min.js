import { toNumber } from 'lodash';
import { defaultTo } from '../helpers';

/**
 * Min number allowed
 * @param error[String]: custom error message.
 * @param param[String]: maximum value to compare to.
 * @param value[String]: value to evaluate.
 * @return [Boolean]: false if number is greater than specified, true otherwise.
 */
export default function min(error, param, value) {
    const _min = toNumber(param);
    const _value = toNumber(value);
    if (isNaN(_min)) {
        throw Error(`min rule expect a number as parameter instead got ${param}`);
    }
    return isNaN(_value) || _value < _min
        ? defaultTo(error, `The minimum value for this field is ${_min}`)
        : null;
}
