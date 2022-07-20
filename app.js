//import file
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal import

const {
  notfoundHandler,
  commonErrorHandler,
} = require("./middleware/common/common-error-handling");

const loginRouter = require("./router/loginRouter");
const inboxRouter = require("./router/inboxRouter");
const usersRouter = require("./router/usersRouter");
//server init
const app = express();
dotenv.config();

//server port
const port = 3000;

//db connection
mongoose
  .connect(process.env.MONGOOSE_LOCAL_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is running");
  })
  .catch((er) => {
    console.log(err);
  });

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//static folder
app.use(express.static(path.join(__dirname, "public")));

//cookie parser
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET_KEY));

//route handling

app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);
app.use("/", loginRouter);
//not found handler
app.use(notfoundHandler);

//common error handler
app.use(commonErrorHandler);

//server running
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
