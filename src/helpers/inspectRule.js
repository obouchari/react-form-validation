import {curry, head, tail} from 'lodash';
import getRule from './getRule';

const inspectRule = curry((validators, rule) => {
    const ruleName = head(rule);
    const params = tail(rule);
    const applyParams = curry(getRule(validators, ruleName));
    return applyParams(...params);
});

export default inspectRule;
