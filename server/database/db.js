import mongoose from "mongoose";

const Connection = async (username,password) => {
  const URL = `mongodb://${username}:${password}@ac-xgl6ag2-shard-00-00.8ntq39d.mongodb.net:27017,ac-xgl6ag2-shard-00-01.8ntq39d.mongodb.net:27017,ac-xgl6ag2-shard-00-02.8ntq39d.mongodb.net:27017/?ssl=true&replicaSet=atlas-ynj3l7-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
