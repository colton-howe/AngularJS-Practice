//Include dependencies that our server will require
var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var bodyParser = require('body-parser');

//Set up how we are going to interpret our post requests.
app.use(bodyParser.urlencoded({
    extended: true
}));

//Tells our server that post data will be formatted as if accessing JSON information.
app.use(bodyParser.json());

//Set up the directory for all of our files
app.use(express.static(__dirname + '/views'));

//Load our main page on first connection
app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/page.html');
});

/**
 * Takes the data from the registration form, which is grabbed and passed by the registration.java file,
 * and checks our accounts.json file to see if the username matches one already in the file. If it matches,
 * tells the user the username is taken and to enter a new username. If the username is not taken, write to
 * the file and say the account has been succesfully registered. 
 * 
 * @params: req - The post request, containing the information in our form
 *          res - The response from our post, so we can send back information about how the post went.
 * @return: Sends a message to the response saying if the registration was successfully or not.
 */
app.post('/register', function (req, res) {
    //Set the filename for our accounts file, read the file, parse the JSON in the file.
    var filename = __dirname + "\\views\\accounts.json";
    var json = fs.readFileSync(filename);
    var data = JSON.parse(json); 
    //The response we are going to send back to the HTML DOM for showing.
    var response = "";
    /**
     * Loop through the usernames in the file to see if our new username matches any of them. If 
     * it does, say the username has been taken.
     */
    for(var i = 0; i < data.users.length; i++){
        if(data.users[i].username == req.body.username){
            response = "Username already taken. Please enter a new username.";
        }
    }
    /**
     * If response is empty, we did not find a matching username, so put our new username and
     * password into our JSON data, then stringify it and write it back out to the same file.
     * Also set the response to say the registration was successful.
     */
    if(response == "") {
        data.users.push({
            username: req.body.username,
            password: req.body.password
      });
      var formattedData = JSON.stringify(data);
      fs.writeFileSync(filename, formattedData);
      response = "Username and password registered.";
    }
    res.send(response);
});

//Set ports for server and display message of how to connect in console.
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Setup Complete. Connect via http://127.0.0.1:' + app.get('port') + '/');
});