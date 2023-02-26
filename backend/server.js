const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddeware");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is the first page of the app");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

//error handling
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, console.log("The server started on port 5000..."));
