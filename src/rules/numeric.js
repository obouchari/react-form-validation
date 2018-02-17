import { toNumber } from 'lodash';
import { defaultTo } from '../helpers';

/**
 * Accept values of numeric type only
 * @param error[String]: custom error message.
 * @param value[String]: value to evaluate.
 * @return [Boolean]: false if length is less than specified, true otherwise.
 */
export default function numeric(error, value) {
    const _value = toNumber(value);
    return isNaN(_value)
        ? defaultTo(error, 'The value of this field must be of numeric type.')
        : null;
}
