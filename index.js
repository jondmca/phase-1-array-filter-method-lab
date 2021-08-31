// Code your solution here
function findMatching(array, test){
    let result = array.filter(string => string.toLowerCase() === test.toLowerCase());
    return result;
}

function fuzzyMatch(array, test){
    let count = test.length;
    let result = array.filter(string => string.slice(0, count) === test);
    return result;
}

function matchName(array, test){
    let result = array.filter(string => string.name === test)
    return result

}