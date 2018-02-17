export default function insertToArray(array, at, ...items) {
    return [...array.slice(0, at), ...items, ...array.slice(at)];
}
