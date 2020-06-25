const express = require('express');
const bodyParser = require('body-parser');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));



let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});