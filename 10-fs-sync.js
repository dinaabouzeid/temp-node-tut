//to read files and create files from scratch

const {readFileSync,writeFileSync}=require('fs');
console.log('start')
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

//will print the text in both files
console.log(first,second);
//without flag, any value in the file will be over written 
writeFileSync('./content/result-sync.txt',
`here is the result : ${first},${second}`,
{flag:'a'})
console.log('done with this task')
console.log('starting the next one')