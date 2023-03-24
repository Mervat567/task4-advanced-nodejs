import mongoose from "mongoose";
const URI ="mongodb://localhost/graphql-demo";


export const dbConnection = async () => {
  return await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect to database");
    })
    .catch((err) => {
      console.log("Failed to connect to database : \n" + err);
    });
};
