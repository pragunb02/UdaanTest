const { createBooking} = require("../repository/bookingRepositry");
const {updateClass,findClassByType}=require("../repository/classRepositry")


const bookSlot=async(userId,classType)=>{
    const classInstance=await findClassByType(classType);
    console.log("bookSlot....");
    if(!classInstance){
        // TODO
        throw new Error("Not found");
    }
    // capacity
    if(classInstance.bookings.lenght < classInstance.capacity){
        
        const booking=await createBooking({userId,classType,});
        classInstance.bookings.push(booking._id);
    }else{
        classInstance.waitingList.push(userId);
    }

    await updateClass(classInstance)
}

module.exports={
    bookSlot
};




