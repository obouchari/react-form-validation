/**
 * @author Otman Bouchari <obouchari@gmail.com>
 */

import validators from './rules';
import { isString, isObjectLike, map, flowRight as compose, curry } from 'lodash';
import { stringToObject, injectCustomError, slice, inspectRule, either } from './helpers';

/**
 * validate the value based on the supplied rules
 * @value: [Array, String, Number, ...]
 * @rules: [String|Object]
 * rules as a String: "required|max:6|min:2"
 * or as an Object: {
 *    'required': 'required custom error message',
 *    'max:6': 'max custom error message'
 * }
 *
 * @return: [Array]
 */

function validate(value, rules, bail = false) {
    if (!either(isObjectLike, isString)(rules))
        throw Error(`Rules must be either a "String" or "Object" instead got ${typeof rules}`);

    if (isString(rules)) {
        rules = stringToObject(rules);
    }

    return map(rules, (error, rule) => {
        const _validate = curry((value, rule) => rule(value));
        const applyRule = compose(_validate(value), inspectRule(validators), injectCustomError(error), slice(':'));
        return applyRule(rule);
    });
}

export default validate;
