const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Mongo-DB-CRUD")
.then(() => console.log("Database connected successfully"))
.catch((err) => console.error(err))

const userSchema = mongoose.Schema({
    name:{type:String, required: true},
    age:{type:Number,required: true},
    dept:{type:String,required: true},
    CGPA:{type:Number,required: true},
    Grade:{type:String,required: true}

})

const userModel = mongoose.model("users", userSchema);

const userData = [
    {
        name:"Vishnu Prasandh",
        age:21,
        dept:"IT",
        CGPA:7.36,
        Grade:"A"
    },
    {
        name:"bhuvanesh",
        age:20,
        dept:"IT",
        CGPA:8.4,
        Grade:"A"
    },
    {
        name:"Hari Krishna",
        age:23,
        dept:"IT",
        CGPA:8.6,
        Grade:"A"
    },
    {
        name:"SakthiNitiss",
        age:22,
        dept:"IT",
        CGPA:9.36,
        Grade:"O"
    },
    {
        name:"shriviyass",
        age:22,
        dept:"IT",
        CGPA:7.5,
        Grade:"B"
    }
]
userModel.create(userData)
.then((data) => console.log("Data inserted succesfully"))
.catch((err) => console.log(err))

userModel.find()
.then((data) => console.log(data))
.catch((err) => console.log(err))

userModel.find({ CGPA: 7.36 })
.then((data) => console.log(data))
.catch((err) => console.log(err))

userModel.updateOne({age: 21}, {age: 23})
.then((data) => console.log("Data Updated succesfully"))
.catch((err) => console.log(err))

userModel.deleteOne({CGPA: 7.36})
.then((data) => console.log("Data Deleted Succesfully"))
.catch((err) => console.log(err))