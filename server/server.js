const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require("passport");
const authenticate = require('./passport-config');



const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
authenticate(passport)
app.use(express.static(__dirname + '/uploads'));
app.use('/uploads', express.static('uploads'));


const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const messageRoutes = require("./routes/messageRoute");


app.use('/user', userRoutes);
app.use('/article', articleRoutes);
app.use('/message', messageRoutes);

// upload userRoute




console.log("Connecting to database. Put the kettle on while you wait... đĢ");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}
  )
  .then(() => console.log("Database connected! đâ"))
  .catch((error) => console.log(error, "Database did not connect! âšī¸â"));

app.listen(3001, () => console.log("The server is listening on port 3001... đ"));
