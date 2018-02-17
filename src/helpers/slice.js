import { compact, flowRight as compose, curryRight, split } from 'lodash';

export default function slice(separator) {
    return compose(
        compact,
        curryRight(split)(separator, -1)
    );
}

