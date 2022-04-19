const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin')


router.get('/',(req, res) => {
    console.log('shop', adminData.products);
    /**
     * The render method should allow us to pass and add data to view template usong js object using a key name like below
     * In pug view engine we can access this props using #{docTitle}
     */
    // res.sendFile(path.join(rootDir, 'views', 'shop.html' ));
    res.render('shop.pug' , { prods: adminData.products, pageTitle: 'Shop' }); // don't need to define .pug bcz we made pug the default view engine in app.js

})

router.get('/test', (req, res) => {
    /** __dirname refer to the current directory in which we are in and it works well both on linux system and windows system*/
    console.log('dirname = ', __dirname);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;