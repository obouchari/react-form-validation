import isValidRule from './isValidRule';

export default function getRule(list, rule) {
    if (!isValidRule(list, rule)) {
        throw Error(`${rule} is not a valid rule! Please check the documentation for available validation rules.`);
    }
    return list[rule];
}
