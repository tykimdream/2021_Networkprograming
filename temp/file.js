// var fs = require('fs');
// fs.writeFile('./output.txt', 'Hello World!', function(err) {
// if(err) {
// console.log('Error : ' + err);
// }
// console.log('output.txt 파일에 데이터 쓰기 완료.');
// });

// console.dir(fs)

var fs = require('fs');
var infile = fs.createReadStream('./output.txt', {flags: 'r'} );
var outfile = fs.createWriteStream('./output2.txt', {flags: 'w'});
infile.on('data', function(data) {
console.log('읽어 들인 데이터', data);
outfile.write(data);
});
infile.on('end', function() {
console.log('파일 읽기 종료.');
outfile.end(function() {
console.log('파일 쓰기 종료.');
});
});