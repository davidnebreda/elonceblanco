const express = require("express");
const app = express();
const morgan = require("morgan");
const CORS = require("cors");
const routes = require("./routes.js");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

const port = process.env.PORT;

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(CORS());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/",routes);

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});


