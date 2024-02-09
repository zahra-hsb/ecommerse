const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, require: true},
    description: String,
    price: {type: Number, require: true}
})

export const Product = model('product', ProductSchema)