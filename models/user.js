import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    emailAddress: String,
    country: String
});

userSchema.methods.register = function () {
    console.log("New user " + this.name)
}

userSchema.methods.logout = function () {
    console.log(this.name + " logged out")
}


const userCollection = "users";
const User = mongoose.model(userCollection, userSchema);

export default User;

//Static methods check later: https://mongoosejs.com/docs/guide.html#statics
/* 
userSchema.methods.login = function () {
    console.log("I am " + this.name)
}
await User.find({ username: "Potato", password: "Tomato" });  */
