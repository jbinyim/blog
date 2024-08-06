import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT || "");
    console.log("DB Connect");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;

// mongoose
//   .connect(process.env.DB_CONNECT || "")
//   .then(() => console.log("DB Connect"))
//   .catch((err) => console.log(err));
