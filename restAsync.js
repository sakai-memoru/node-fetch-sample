let fetch = require('node-fetch');
let CONS_URL = 'http://hipsterjesus.com/api/'

var result;

fetch(CONS_URL).then(res => res.json())
  .then(data => result = data)
  .catch(e => console.log("Booo"))
  .then(data => console.log(result.text.substring(0,20))
  )
