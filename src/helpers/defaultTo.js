import {isEmpty} from 'lodash';

export default function defaultTo(value, defaultValue) {
    return isEmpty(value) ? defaultValue : value;
}
