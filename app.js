const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const errorController = require('./controllers/error');
const expressHbs = require('express-handlebars');

/** ejs template have mixes functionality like from pug can do js exp logics in html 
 * 'view engine' is a reserved configuration key which understood by expressjs
*/
app.set('view engine', 'ejs'); // =>  now node will use this default view engine,

/**  =====   app.set() ====== use for global configurations */
/** ---------handlebars  expressHbs('extension name for html file', 'template type')---------- */
// app.engine(
//     'hbs',
//     expressHbs({
//       layoutsDir: 'views/layouts/',
//       defaultLayout: 'main-layout',
//       extname: 'hbs'
//     })
//   );
// app.set('view engine', 'hbs'); // =>  now node will use this default view engine,

/** ------- pug ------------------ */
// app.engine('pug', require('pug').__express)
// app.set('view engine', 'pug'); // => using this line we don't need to add .extension in file like .pug etc bcz this will make the mentioned fil our default view engine pug here in this case
app.set('views', path.join(__dirname, 'views'));  // don't need this line exactly, until views folder name change or different

const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

/**
 * GLobal configuration Value, read it thorigh app.get()
 * app.set() have default path to views folder, if we name it diffrently for view, then use app.set('views', 'folder name')
 */

app.use(bodyParser.urlencoded({extension: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/admin', adminDataRoutes.routes);
app.use('/admin', adminRoutes);
// app.use('/shop', shopRoutes);
app.use(shopRoutes);
// ----------------- Middleware explain
/**
*  app.use() method to create middleware, we can use app.get(), app.post(), app.delete(), app. patch etc
*  if any funtion pass to it, then every incoming request will go throught that functions
*  next() is func that allow a request to travel next middleware, that can be below it
*  app.use have 8+ overload function inside express, check documentation for detail 
 * specific path should be at the top, if not then generic like '/' can match any req, bcz this '/' match all request
*/
/**
    app.use('/',(req, res, next) => {
        console.log('this always runs');
        next()
    });
    app.use('/demo-test', (req, res, next) => {
        console.log('in the middleware');
        res.send('/add-product');
    });

    app.use('/',(req, res, next) => {
        console.log('in the second below middleware, came here after nextg is called');
        // send can take any arguments and its type converted to it, like in this case in browser contentTYpe: text/html 
        res.send('<h1>hello from express</h1>'); 
    });
 */

// -------------next section form ------------------------
// app.use('/add-product', (req, res) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Send Product</button></form>')
// })
// /**
//  * By default req does try to parse the req.body, we use a package body-parser which express has
//  */
// app.use('/product', (req, res) => {
//     console.log('body req = ', req.body) // gives undefined, if we don't use body-parser pakage at the top
//     res.redirect('/'); //redirect to another request route in node
// })

// --------------create sever --------------
// - createserver(request.handler)
// - createserver(app) app is avalid request handler but it will not do anything ut it will does one thing to 
// it sets a certain way of handling requests
/** 
 * //we can use app.listen(), which internally run same these tw line below
    const server = http.createServer(app); 
    server.listen(3100); 
 */

// -----------------404 route not found error handling
app.use(errorController.get404)

app.listen(3100); 