var fs = require('fs');

// How to remove file
// fs.unlink('write1.txt');

// asynchronus method
// fs.mkdir('stuff', function(){
//     var getText = fs.readFileSync('read.txt', 'utf-8');
//     fs.writeFile('./stuff/write.txt', getText);
// });

// synchronus method
fs.mkdirSync('test');
fs.writeFileSync('./test/write.txt', 'hello hi how are you');


// If you want to remove directory and directory have some files
// than you will have to remove first file 

// fs.unlink('./test/write.txt', function(){
//     fs.rmdir('test');
// })
