require('dotenv').config()

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const doctorRoutes = require("./routes/doctor");


//db connection
mongoose.connect(process.env.DATABASE,
 {useNewUrlParser: true,
useUnifiedTopology:true,
useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED")
});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", doctorRoutes);

//PORT
const port = process.env.PORT || 8080;

//Starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})
