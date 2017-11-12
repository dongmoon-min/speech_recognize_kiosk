var express = require ('express');
var fs = require ('fs');

var app = express ();

app.get ('/', function (req, res) {
    fs.readFile ('./views/index.html', function (error, data) {
        if (error) {
            console.log (error);
        }
        else {
            res.writeHead (200, {'Content-Type':'text/html; charset=utf-8'});
            res.end (data);
        }
    })
});

app.listen (80, function () {
    console.log ('Connected');
});
