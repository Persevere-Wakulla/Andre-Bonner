import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    product_name: String,
    quantity: Number,
    price: Number,
    expiration_date: String,
    supplier: String,
    category: String,
    shelf_location: String,
    discount_percentage: Number,
    in_stock: Boolean,
    purchase_date: String
},
{
    // timestamps: true,
    collection: 'items'
})

export const Item = mongoose.model('item', itemSchema)