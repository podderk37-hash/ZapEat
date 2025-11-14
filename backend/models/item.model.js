import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    },
    category: {
        type: String,
        enum: ["STREET_FOOD",
            "NORTH_INDIAN",
            "SOUTH_INDIAN",
            "EAST_INDIAN",
            "WEST_INDIAN",
            "DESSERT",
            "BEVERAGE",
            "SNACKS",
            "BIRYANI",
            "SEAFOOD",
            "FAST_FOOD"
        ],
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    foodType: {
        type: String,
        enum: ["veg","non veg"],
        required: true
    },
    rating: {
        avarage: {type: Number,default:0},
        count: {type: Number,default:0},
    }

}, { timestamps: true })

const Item = mongoose.model("Item",itemSchema);

export default Item;