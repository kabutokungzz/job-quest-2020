// Backend
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
// const cors = require('cors')

// const corsOptions = {
//     origin: ['http://localhost:3000'],
//     optionsSuccessStatus: 200
// }

// middle ware
// app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('./controller'))

app.listen(3000, ()=>{
    console.log("server is running...");
})