/**
 * A function that takes a string and checks it against a regex pattern to see if it matches the 
 * pattern. The match() function returns null if no match, so can be used as true/false indicator
 * @param String input - The string that we are running through our regex pattern
 * @param RegexPattern pattern - The regex pattern to judge the string
 * @return True if it matches the string matches the regex, false if it does not.
 */

function validString(input, pattern){
    return (input.match(pattern) != null);
}

/**
 * Function to handle displaying messages to the user
 * @param String msg  - The message to be displayed
 */

/**
 * Sets up our AngularJS module and controller, which allows us to easily manipulate the data in
 * DOM.
 * @param scope - The scope of our AngularJS module. Allows us to access our variables.
 * @param http - An AngularJS service that allows us to make HTTP requests.
 */
var app = angular.module('userRegistration', []);
app.controller('registrationControl', function($scope, $http){
    //Initalize our AngularJS variables
    $scope.formData = {username: "", password: ""};
    $scope.error = "";

    /**
     * AngularJS function to handle the registration of the data. The function is called when
     * the button at the bottom of our form is clicked.
     */
    $scope.registerUser = function(){
        //Get the username and password from our text inputs
        var username = $scope.formData.username;
        var password = $scope.formData.password;
        
        //Set up our username and password regex patterns
        var userPattern = /^[a-zA-Z0-9]+$/;
        var pswPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        /** 
         * Error checking for lengths and pattern validity. If no problems, make request to 
         * the server to add the username and password to the accounts file.
         */
        if(username.length < 5){
            $scope.error = "Username Not Valid. Username must be no less than 5 characters.";
        } else if(!validString(username, userPattern)){
            $scope.error = "Username Not Valid. Username must be alpha-numeric values only.";
        } else if(password.length < 8){
            $scope.error = "Password Not Valid. Password must be no less than 8 characters.";
        } else if(!validString(password, pswPattern)) {
            $scope.error = "Password Not Valid. Password must contain one uppercase, one lowercase, and one number.";
        } else {
            $http.post('/register', $scope.formData).
            then(function(response) { //Display message that we get back from the server
                $scope.error = response.data;
            }, function(response) { //Display any errors if they occur
                $scope.error = "Registration Error.";
                console.log(response);
            });         
        }
    };
});

