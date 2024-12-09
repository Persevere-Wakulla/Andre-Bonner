import mongoose from "mongoose"

const subscriberSchema = mongoose.Schema(
    {
        fName:{
            type: String,
            required: true,
        },
        mName:{
            type: String,
            required: true,
        },
        lName:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        phone:{
            type: Number,
            required: true,
        },
        accountNumber:{
            type: Number,
            required: true,
        },
        currency:{
            type: String,
            required: true,
        },
        cardType:{
            type: String,
            required: true,
        },
        nickname:{
            type: String,
            required: true,
        },
        petNickname:{
            type: String,
            required: true,
        },
        favFood:{
            type: String,
            required: true,
        },
        favColor:{
            type: String,
            required: true,
        },
        changedName:{
            type: String,
            required: true,
        },
        gmaMiddleName:{
            type: String,
            required: true,
        },
        songName:{
            type: String,
            required: true,
        },
        userName:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: 'Subscription'
    }
);
export const Subscription = mongoose.model('Subscription', subscriberSchema);