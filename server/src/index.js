const app = require('./app.js');

//set port and app listening
app.listen(app.get('port') , () => {
  console.log('listening on port '+ app.get('port'));
});
