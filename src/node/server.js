var express = require('express');
const bodyParser = require('body-parser')
var app = express();
var fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/listProducts', function (req, res) {
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/listBagItems', function (req, res) {
   fs.readFile( __dirname + "/" + "bagItems.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.post('/addItem', function (req, res) {
   // First read existing users.
   var data = fs.readFileSync( __dirname + "/" + "bagItems.json");
   var jsonData = JSON.parse( data );
   jsonData.push(req.body);
   console.log( jsonData );
   var configJSON = JSON.stringify(jsonData);
   fs.writeFileSync( __dirname + "/" + "bagItems.json" , configJSON);
   res.end( configJSON);
})

app.delete('/deleteItem', function (req, res) {
   // First read existing users.
   var data = fs.readFileSync( __dirname + "/" + "bagItems.json");
   if("" === data){
    data = "[]";
   }
   var jsonData = JSON.parse( data );
   jsonData.pop(req.body);
   console.log( jsonData );
   var configJSON = JSON.stringify(jsonData);
   fs.writeFileSync( __dirname + "/" + "bagItems.json" , configJSON);
   res.end( configJSON);
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})