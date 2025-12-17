import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://mdhbz99e:1234@cluster0.1l1zj.mongodb.net/ "
    );
    console.log("Database Connected successfully");
  } catch (error) {
    console.log(e);
  }
}
