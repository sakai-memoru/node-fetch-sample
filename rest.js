let fetch = require('node-fetch');
let CONS_URL = 'http://hipsterjesus.com/api/'


fetch(CONS_URL, {
  method: 'GET',
  body: '{}'
  })
  .then(response => {
    return response.json();
  })
  .then(res =>{ 
  	console.log(res.params);
  	console.log(res.text.substring(0,100));
  })
  .catch(err => {console.log(err);});
