import mongoose from "mongoose"

const connectDB = async()=>{
    try{
const connection = mongoose.connect(process.env.MONGO_URL)
console.log("Detabase Connected")

    }
    catch(e){
        console.log(`Error in MongoDB ${e}`)
    }
}
export default connectDB