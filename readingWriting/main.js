var fs = require('fs');

// synchronus way
// var readfile = fs.readFileSync('read.txt', 'utf-8');
// console.log(readfile);
// fs.writeFileSync('write.html', readfile);
//write.html file will be create automatically

// asynchronus way
fs.readFile('read.txt', 'utf-8', function(error, data){
    console.log(data);
    fs.writeFile('write.txt', data);
})
console.log('test');
// write.txt file will be create automatically