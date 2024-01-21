import mongoose from "mongoose";

const connectDB = async () => {
	const mongoUrl = "mongodb+srv://rahulsaw2003:LDKUdoHnrKNHrAR9@cluster0.7hv2sht.mongodb.net/?retryWrites=true&w=majority";
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
