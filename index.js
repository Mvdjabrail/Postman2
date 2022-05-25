const express = require("express");

const app = express();

const port = 5000

app.use(require("./routes/products.route"));
app.use(require('./routes/brends.rout'))

app.listen(port, () =>{
  console.log('Сервер запущен')
});