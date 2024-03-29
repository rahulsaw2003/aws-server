import mongoose from "mongoose";

const connectDB = async () => {
	const mongoUrl = process.env.MONGO_URI;
	try {
		const conn = await mongoose.connect(mongoUrl, {
			dbName: "heliverse",
		});

		console.log(`MongoDB Connected Successfully at: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error in MongoDB Connection: ${error.message}`);
	}
};

export default connectDB;
