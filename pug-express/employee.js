var express = require('express')
var path = require('path')
const mongoose = require('mongoose')

var app = express()
var port = 3000
var DBPORT = 'mongodb://heroku_1r8j2qpn:vqtghhmnnv1t83qag4j9uqj5oa@ds153824.mlab.com:53824/heroku_1r8j2qpn'


// ----- Middleware -----

//Set up default mongoose connection
mongoose.connect(DBPORT)

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise

//Get the default connection
var db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// -----
// -----

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'newviews'))

// -----

var Schema = mongoose.Schema

var employeeschema = new Schema({
    name: {
        type: String
    },
    refer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
})

var Employee = mongoose.model('Employee', employeeschema)





// ----------



app.get('/', function (req, res) {
    res.render('index')
})

app.get('/employees', function (req, res) {
    Employee.find({}).populate('refer').exec((err, result) => {
        if (err) return res.status(500).send(err)

        if (result) return res.render('employees', {
            employees: result
        })

        return res.send('No record found.')

    })
})

app.get('/employees/:id', function (req, res) {
    Employee.findById(req.params.id).populate('refer').exec((err, result) => {
        if (err) return res.status(500).send(err)

        if (result) return res.render('employeedetail', {
            employee: result
        })

        return res.send('No record found.')

    })
})

app.get('/employee/create', function (req, res) {
    console.log(req.query);

    var newemp = new Employee({
        name: req.query.name,
    })

    if (req.query.check == "on") {
        newemp.refer = req.query.referer
    }

    newemp.save(err => {
        if (err) {
            throw err
        }
        res.send(newemp)

    })
})

app.listen(port, function () {
    console.log('App listening on port ' + port + '...')
})