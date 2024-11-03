import mongoose from 'mongoose';


type ConnectionObject = {
    isConnected?: number
};

const connection: ConnectionObject = {};

async function dbConnect(mongo_uri: string): Promise<void> {
    if (mongo_uri === '') {
        throw new Error('Mongo URI string cannot be empty.');
    }

    if (connection.isConnected) {
        console.log("Already connected");
        return;
    }

    try {
        const db = await mongoose.connect(mongo_uri);

        connection.isConnected = db.connections[0].readyState;

        console.log("DB Connected Succesfully");
    } catch (error) {

        console.log("DB connection failed", error);

        process.exit(1);
    }
}

export default dbConnect;
