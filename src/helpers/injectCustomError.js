import {curry} from 'lodash';
import insert from './insertToArray';

const injectCustomError = curry((error, rule) => insert(rule, 1, error));

export default injectCustomError;
