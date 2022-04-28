const express = require('express')
const app = express()

const clientRouter = require('./routes/clients')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/muber', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());
clientRouter(app)

app.use((err, req, res, next) => {

    res.status(422).send({
        error: err.message
    })
})
module.exports = app;