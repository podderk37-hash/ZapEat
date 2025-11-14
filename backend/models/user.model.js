import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
    },
    mobile: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["user", "owner", "deliveryBoy"],
        require: true
    },
    resetOtp: {
        type: String
    },
    isOtpVerified: {
        type: Boolean,
        default: false
    },
    otpExpires: {
        type: Date
    },
    socketId: {
        type: String
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] }
    }
}, {
    timestamps: true
})

userSchema.index({ location: '2dsphere' })

const User = mongoose.model("User", userSchema)

export default User;