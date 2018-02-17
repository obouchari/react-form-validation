import {isFunction} from 'lodash';

// Match the string rule with the corresponding function in rule list
export default function isValidRule(list, rule) {
    return isFunction(list[rule]);
}
