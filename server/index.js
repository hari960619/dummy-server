const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbConnection = require('./config/dbConnection');
const productRouter = require('./routes/productRouter');
const PORT = process.env.PORT || 8001;
dbConnection("dummy-server");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/api/products", productRouter)

app.listen(PORT, () => console.log(`Server running on ${PORT}!!!`))