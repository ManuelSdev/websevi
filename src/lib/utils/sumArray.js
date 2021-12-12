



//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters
export const sumArray = (...array) => {
    return array.reduce((previous, current) => {
        return previous + current;
    });

}
