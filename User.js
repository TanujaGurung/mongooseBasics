const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type:Number,
    min:1,
    max:100, 
    validate:{validator: v=> v%2 === 0,
     message:props => `${props.value} is not an even number`}      
},
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable:true,
  },
  update: {
    type: Date,
    default: () => Date.now(),
    immutable:true,
  },
  bestFriend:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  address: {
    street: String,
    post: Number,
  },
  hobbies: [String],
});

module.exports = mongoose.model("User", userSchema);
