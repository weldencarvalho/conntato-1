const express = require('express');
const app = express();
const routes = require('./routes');
const models = require('./models');

app.set('port', 3000);

app.use((req, res, next) =>{
  res.header('X-Powered-By', 'Contacts API');
  next();
});

app.use('/', routes);

models.sequelize.sync().then(() => {
  app.listen(app.get('port'), () =>{
    console.log(`Application started in :${app.get('port')}`);
  });
})
