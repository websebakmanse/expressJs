const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connecteDB = require('./config/db');


dotenv.config();
connecteDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! sebak mondal');
});

const  studentsRouter = require("./routers/studentsRouters");
app.use("/api/students", studentsRouter);



app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});