const http = require('http')
//req=request, res=result
const server= http.createServer((req,res)=>{
    //console.log(req)
    if(req.url=='/'){
        res.end('Welcome to our home page')
    }
    if(req.url=='/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
    //res.write('Welcome to our home page')
    //res.end()
})
server.listen(5001)