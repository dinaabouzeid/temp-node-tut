// we execute one file but keep our code in sperate files (modules) as normal
// modules allow us to seperate different functions in different files to keep our code organised
// commonjs, every file is module (by default)
// modules - encapsulated code (only share minimum)

//here we can see the objects shared from file 4-name
const name= require('./4-name')
const sayHi= require('./5-utils')
const data=require('./6-alternativeflavor')
require('./7-mind-grenade')
sayHi('dina')
sayHi(name.john)
sayHi(name.peter)