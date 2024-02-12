import mongoose from "mongoose";
import { reportModel } from "../models/index.js";
import { data } from "../data/data.js";

// database connection
export const connection = () => {
  mongoose
    .connect(
      "mongodb+srv://onlystudy9569:onlystudy9569@cluster0.9axkkd6.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("MongoDb database is connected!");
      // Add data only one time
      // reportModel.insertMany(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
