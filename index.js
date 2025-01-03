const express=require('express');

const app=express();

const port=3000;

const bookRoute=require('./src/routes/bookingRoutes')

const db=require('./src/utlis/db');
const bodyParser=require('body-parser')

app.use(bodyParser.json());


app.use(express.json());
app.use('/api/book',bookRoute);

// app.listen(port,()=>{
//     console.log(`Server is Running on Port ${port}`);
// })

db.connectdb()
   .then(()=>{
    app.listen(port,()=>{
        console.log(`Server is Running on Port ${port}`);
    })
    
   }).catch((err)=>{
       console.log(err);
   });