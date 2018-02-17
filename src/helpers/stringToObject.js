import { flowRight as compose, curryRight, reduce } from 'lodash';
import slice from './slice';

export default function stringToObject(rules) {
    return compose(
        curryRight(reduce)((object, rule) => {
            object[rule] = '';
            return object;
        }, {}),
        slice('|')
    )(rules);
}
