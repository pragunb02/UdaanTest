const User=require('../model/User')

// const creatUser

const getUserByID=async (userId)=>{
   return await User.findOne({userId});
};

module.exports={
  getUserID
}