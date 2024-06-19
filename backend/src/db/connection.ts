import e from 'express';
import { connect, disconnect } from 'mongoose';
async function connectToDB() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }
}

async function disconnectFromDB() {
    try {
        await disconnect();
        console.log('Disconnected from database');
    } catch (error) {
        console.error('Error disconnecting from database: ', error);
    }
}
export { connectToDB, disconnectFromDB };