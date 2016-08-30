'use strict';

/**
 * @ngdoc function
 * @name testingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testingApp
 */
angular.module('testingApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 
$( document ).ready(function() {
  // Get access token
  // Celtra API here loadJSONP() http://support.celtra.com/docs/products/display/creative/creative-api/celtra-javascript-api-v10#loadjsonp
    // var apiKey = "ckmsjqeajekch5qwd2fuhg9t"
    // var sharedSecret = "vn8Bdgkd6JcM5NKN72nSWxWyQmWgCP8YTYDkBVwwKn9Ye"

    // var appendApiKeyHeader = function( xhr ) {
    //   xhr.setRequestHeader(apiKey, sharedSecret)
    // }
    // var searchRequest = { "phrase": "dog" }

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (xhttp.readyState == 4 && xhttp.status == 200) {
    //     document.getElementById("demo").innerHTML = xhttp.responseText;
    //   }
    // };
    // xhttp.open("POST", "https://api.gettyimages.com/oauth2/token/", true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhttp.send("client_id="+apiKey+"&client_secret="+sharedSecret+"&grant_type=client_credentials");
    // GetSearchResults();


    
  // find the desired selectors
  var btn = document.getElementById('request');
  var bio = document.getElementById('bio');
  
  // set up a request
  var request = new XMLHttpRequest();
  
  // keep track of the request
  request.onreadystatechange = function() {
    // check if the response data send back to us 
    if(request.readyState === 4) {
      // add a border
      bio.style.border = '1px solid #e8e8e8';
      // uncomment the line below to see the request
      // console.log(request);
      // check if the request is successful
      if(request.status === 200) {
        // update the HTML of the element
        bio.innerHTML = request.responseText;        
      } else {
        // otherwise display an error message
        bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }

  // specify the type of request
  request.open('Get', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt');

  // register an event
  btn.addEventListener('click', function() {
    // hide the button
    this.style.display = 'none';
    // send the request
    request.send();
  });
  

});

 });

// Then do a search

// then parse JSON