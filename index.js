const express = require("express");

const app = express();

const port = 8080;

const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testUsers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("we are connected with database");
});
run();
async function run() {
  
  try{
    const user = await User.find({name:"Sheela"}).populate("bestFriend")
    //basically we can perform all kind of mongodb commands and queries using User.findById(...)
    // const user = await User.create({
    //   name: "Sheela",
    //   age: 12,
    //   email: "test1@gmail.com",
    //   address: { street: "dwarakanagara colony", post: 643102 },
    //   hobbies: ["gardening", "listening musics"],
    // });
    // user.bestFriend = "641a8a32c193bf5614244a52"
    // await user.save()
  
    console.log("user", user);
  }catch(e){
    console.log(e)

  }
 
}

// app.get("/",(req, res)=>{
//     res.send("Welcome to mongoDb tutorial with node")
// })

// app.listen(port,()=>{
//     console.log(`app is running at port ${port}`)
// })
