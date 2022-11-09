//async call same as a call back function (a function that will run if some event occurs)
const {readFile,writeFile}=require('fs');
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    //console.log(result)
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./content/result-async.txt',
        `here is the result : ${first},${second}`,
        {flag:'a'},
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            //console.log(result)
            console.log('done with this task')
        })
    })
})
//in async call backs, node will start a task and then go to the next one . the first task will run async not holding back the whole program untill it finishes
console.log('starting next task')