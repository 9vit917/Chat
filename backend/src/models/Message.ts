import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
    messageType: string,
    dialog: {
        type: Schema.Types.ObjectId;
        ref: string;
    },
    isRead: boolean,
    text: string
}

const MessageSchema = new Schema({ 
    messageType: { type: String, required: true },
    dialog: {
        type: Schema.Types.ObjectId,
        ref: "Dialog"
    },
    isRead: Boolean,
    text: String 
}, {
    timestamps: true
});

export default mongoose.model<IMessage>('Message', MessageSchema);