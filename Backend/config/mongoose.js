const mongoose = require('mongoose');
//here you have to provide the URL of your database 

const URI = "";

mongoose.connect(URI);
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true});



const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error into coonect to the database'));

db.once('open',function()
{
    console.log("Database is connected sucessfully");
});


  






