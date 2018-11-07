var superagent = require('superagent')

superagent
    .get('http://ada-dog-facts.herokuapp.com/facts/100')
    .end(function(error, response){
        if(error){
            console.log('Error : ',error);
        }
        console.log('Status code : ',response.status);
        console.log('Body : ', response.body);
    })