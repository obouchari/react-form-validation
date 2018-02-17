import isEmpty from 'validator';
import { defaultTo } from '../helpers';

/**
 * Accept anything but an empty value
 * @param error[String]: custom error message.
 * @param value[String]: value to evaluate.
 * @return [Boolean]: false for empty value, true for anything else.
 */

export default function required(error, value) {
    return isEmpty(value.trim())
        ? defaultTo(error, 'This field is required!')
        : null;
}
