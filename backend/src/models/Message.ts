import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
    messageType: string,
    dialog: {
        type: Schema.Types.ObjectId;
        ref: string;
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: string
    }
    isRead: boolean,
    text: string
}

const MessageSchema = new Schema({ 
    messageType: { type: String, required: true },
    dialog: {
        type: Schema.Types.ObjectId,
        ref: "Dialog"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }, 
    isRead: {
        type: Boolean,
        default: false
    },
    text: String 
}, {
    timestamps: true
});

export default mongoose.model<IMessage>('Message', MessageSchema);