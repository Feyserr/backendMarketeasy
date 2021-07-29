require("dotenv").config();
const express = require('express'); 
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(express.urlencoded({
    extended: false
  }));
app.use(express.json({ type: 'application/json' }));
app.use(cors());
app.use('/', require('./server/route/productsRoute'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Server running");
});
app.use(bodyParser.urlencoded({extended:true}));