const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const conn = require('./config/database')

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// import routes
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

// routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

// frontend
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
  // app.use(function(err, req, res, next) {
  //   // set locals, only providing error in development
  //   res.locals.message = err.message;
  //   res.locals.error = req.app.get('env') === 'development' ? err : {};

  //   // render the error page
  //   res.status(err.status || 500);
  //   res.send('error');
  // });

  conn
// .sync({force: true})
.sync()
// .then(()=>{
//     app.listen(port, ()=>{
//         console.log(`Servidor online. http://localhost:${port}`)
//     })
// })
.catch(err => console.error('Erro: ', err))

  module.exports = app;