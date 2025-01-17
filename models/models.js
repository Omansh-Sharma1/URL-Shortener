import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true 
});

export default mongoose.model('Url', urlSchema);
