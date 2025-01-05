import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        await mongoose.connect('Put your Connection String Here!');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectToDatabase;