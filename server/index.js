import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRouter from "./routes/student.js";

const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

app.use("/students", studentRouter);

const url =
  "mongodb+srv://damish:damish@123@cluster0.rlen3.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, function () {
  console.log("Connection is success fully setted");
});

mongoose.set("useFindAndModify", false);
