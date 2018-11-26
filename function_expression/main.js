// way 1
function sayHi(){
    console.log('hello hi');
}
sayHi();

// way 2
var sayBye = function(){
    console.log('say bye');
}
sayBye();

// way 3
function Greeting(){
    console.log('Hello How Are You');
}

function callFunction(fun){
    fun();
}

callFunction(Greeting);