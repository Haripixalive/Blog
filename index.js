const app=require('./app')
const mongoose= require('mongoose')

port=1001

const dburl="mongodb+srv://haripriyan29:haripriyan29@cluster0.4o52ldg.mongodb.net/Blog?retryWrites=true&w=majority"

mongoose.connect(dburl)
.then((result)=>{
    console.log('Database connected')
})
.catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port)