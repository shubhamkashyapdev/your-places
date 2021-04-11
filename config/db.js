const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(`${process.env.MONGO_URI}`, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.error(err.messsage);
    process.exit(1);
  }
};

module.exports = connectDB;
