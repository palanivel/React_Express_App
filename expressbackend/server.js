 const express = require('express')
 const devenv = require('dotenv').config

 const PORT = process.env.PORT || 5000
 const app = express()

 app.use(express.json())
 app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=> {
    res.send("HELLO API")
})

//Routes
app.use('/api/weather', require('./routes/weatherRoutes'))

 app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
 