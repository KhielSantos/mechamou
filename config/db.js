const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true 
    }).then(() => console.log('DB Connected..'));
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;