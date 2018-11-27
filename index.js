var express = require('express')

var app = express()
var port = 3000

app.use(express.static(__dirname + '/public'))

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/public/index.html")
// })

// app.get('/red', function (req, res) {
//     res.send("Hello red!")
// })

app.listen(port, function () {
    console.log('App listening on port ' + port + '...')
})