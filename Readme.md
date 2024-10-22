# Next.js MongoDB Connection Utility

This package provides a reusable MongoDB connection utility using Mongoose for Next.js projects. It simplifies the process of connecting to MongoDB and ensures efficient database connection handling.

## Installation

You can install the package via npm :-
`
npm install next-mongo-connect
`

## Usage

1. Import the dbConnect function into the Next.js API routes or pages.
2. Call the function with the MongoDB connection string to establish a MongoDB connection using Mongoose.

Example :-

`
import dbConnect from 'next-mongo-connect';

async function handler(req, res) {
    const mongo_uri = process.env.MONGO_URI || "";

    await dbConnect(mongo_uri);
    // Your API Logic
};

export default handler;
`

## Environment Setup

Store your MongoDB connection string in the .env.local file :-
`
MONGO_URI = mongodb connection string
`

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is under the MIT License.