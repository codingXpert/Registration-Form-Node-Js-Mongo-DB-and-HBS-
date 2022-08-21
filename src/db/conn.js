const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/RegistrationForm", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connected to DB`);
}).catch((err)=>{
    console.log(`Connection Failed Due To ${err}`);
});