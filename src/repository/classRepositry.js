const Class=require('../model/Class')

const findClassByType=async(classType)=>{
    return await Class.findOne({classType});
 };

 const updateClass=async(classInstance)=>{
    await classInstance.save();
 }
 
 module.exports={
    findClassByType,
    updateClass
  }