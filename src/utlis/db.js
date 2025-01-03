const mongoose=require('mongoose');

const connectdb=async()=>{
    try{
          await mongoose.connect('mongodb://localhost:27017/fitness_booking',{
            useNewUrlParser: true,
             useUnifiedTopology: true
        });
    }catch(err){
        console.log(err)
    }
}


module.exports={connectdb}


// curl  -X POST http://localhost:3000/api/book \
// -d '{"userId" : "user123, "classType":"yoga"}'