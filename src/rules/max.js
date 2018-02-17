import { toNumber } from 'lodash';
import { defaultTo } from '../helpers';

/**
 * Max number allowed
 * @param error[String]: custom error message.
 * @param param[String]: maximum value to compare to.
 * @param value[String]: value to evaluate.
 * @return [Boolean]: false if number is greater than specified, true otherwise.
 */
export default function max(error, param, value) {
    const _max = toNumber(param);
    const _value = toNumber(value);
    if (isNaN(_max)) {
        throw Error(`max rule expect a number as parameter instead got ${param}`);
    }
    return isNaN(_value) || _value > _max
        ? defaultTo(error, `The maximum value for this field is ${_max}`)
        : null;
}
