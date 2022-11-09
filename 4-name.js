//local
const secret='secret'
//shared
const john='john'
const peter='peter'
//to make john, peter global and can be accessed from any file
//we put {} because we are exporting multiple values
module.exports={john,peter}
