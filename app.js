const e=require('express')
const app=e()
const userrouter= require('./router.js/userrouter')
const parser= require('body-parser')

app.use(parser.json())
app.use(userrouter)

module.exports=app