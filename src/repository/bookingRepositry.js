const Booking=require('../model/Booking')

const createBooking=async(bookingData)=>{
    return await Booking.create(bookingData);
}

// const 
module.exports={
    createBooking
};