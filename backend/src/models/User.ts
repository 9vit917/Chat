import mongoose, { Schema, Document } from "mongoose";
import isEmail from 'validator/lib/isEmail';

export interface IUser extends Document {
    email: string;
    avatar?: string;
    fullname: string;
    confirmed: boolean;
    password: string;
    confirm_hash?: string;
    last_seen?: Date;
}

const UserSchema = new Schema({ 
    email: {
        type: String,
        required: "Email address is required",
        validate: [isEmail, "Invalid Email"],
        unique: true
    },
    avatar: String,
    fullname: {
        type: String,
        required: "Full name is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    confirmed_hash: String,
    last_seen: {
        type: Date,
        default: new Date()
    } 
}, {
    timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema, 'users');