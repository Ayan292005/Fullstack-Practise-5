import { Schema,model } from "mongoose";

let firstModel= new Schema({
    image:String,
    name:String,
    desc:String,
    price:Number
})

export const ProductModel=model("featuredProducts",firstModel)