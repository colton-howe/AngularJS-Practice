var app = angular.module('myApp', []);
app.controller('myController', function($scope){
    $scope.items = [
        {
            url: 'https://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
            title: '50 Must-have plugins for extending Twitter Bootstrap',
            image: 'https://tutorialzine.com/media/2013/07/featured_4.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
            title: 'Making a Super Simple Registration System With PHP and MySQL',
            image: 'https://tutorialzine.com/media/2013/08/simple_registration_system.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/08/slideout-footer-css/',
            title: 'Create a slide-out footer with this neat z-index trick',
            image: 'https://tutorialzine.com/media/2013/08/slide-out-footer.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/06/digital-clock/',
            title: 'How to Make a Digital Clock with jQuery and CSS3',
            image: 'https://tutorialzine.com/media/2013/06/digital_clock.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/05/diagonal-fade-gallery/',
            title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
            image: 'https://tutorialzine.com/media/2013/05/featured.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
            title: 'Mini AJAX File Upload Form',
            image: 'https://tutorialzine.com/media/2013/05/ajax-file-upload-form.jpg'
        },
        {
            url: 'https://tutorialzine.com/2013/04/services-chooser-backbone-js/',
            title: 'Your First Backbone.js App – Service Chooser',
            image: 'https://tutorialzine.com/media/2013/04/service_chooser_form.jpg'
        }
    ];

});