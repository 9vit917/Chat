import mongoose, { Schema, Document } from "mongoose";
import isEmail from 'validator/lib/isEmail';
import { generatePasswordHash } from "../utils";

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

// UserSchema.virtual('isOnline').get(function(this: any) {
//     return differenceInMinutes(new Date().toISOString(), this.last_seen) < 5;
//   });
  
//   UserSchema.set('toJSON', {
//     virtuals: true,
//   });
  
  UserSchema.pre('save', async function(next) {
    const user: any = this;
  
    if (!user.isModified('password')) {
      return next();
    }
  
    user.password = await generatePasswordHash(user.password);
    user.confirm_hash = await generatePasswordHash(new Date().toString());
  });
  

export default mongoose.model<IUser>('User', UserSchema, 'users');