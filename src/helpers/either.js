import {curry} from 'lodash';

const either = curry(function either(f, g) {
    return function _either() {
        return f.apply(this, arguments) || g.apply(this, arguments);
    };
});

export default either;
