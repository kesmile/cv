var express = require('express');
var app = express();
var router = express.Router();
var data = require('./../../models/data.js');
var portafolio = require('./../../models/portafolio.js');
app.use(router);
app.set('views', __dirname + '/views');
module.exports = app;
/* GET home page. */

router.get('/', function(req, res) {
    res.render('index', { title: 'Kelvi Padilla', portafolio: portafolio });
});



router.get('/page/:url?', function(req, res) {
  var url = req.params.url;
  if (typeof(url) !== 'undefined'){
    var content = searchByKey(data,url);
    res.render('page', { title: content.title, content: content.content, site: content.site });
  }else{
    res.render('index', { title: 'Desde controlador principal', url: 'work' });
    
  }
});
/*
 *  Funcion para buscar clave
 */
function searchByKey(array,key) {
  for (var i = 0, l = array.length; i < l; i++){
    if (array[i]['url'] === key) {
      return array[i];
    }
  }
  return false;
}

module.exports = app;
