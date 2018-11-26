function counter(arr){
    return 'There are ' + arr.length + ' Element in array';
}

function add(a, b){
    //return  a + b;
    return `Sum Is ${a+b}`;
}

var pi = 3.214;

// module.exports.minus = function(a,b){
//     return a-b;
// }
function minus(a, b){
    return a - b;
}

// module.exports.counter = counter;
// module.exports.add = add;
// module.exports.pi = pi;

module.exports = {
    counter:counter,
    add:add,
    pi:pi,
    minus:minus
}
