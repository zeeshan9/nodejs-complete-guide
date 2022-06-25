/** 
 * this router is like a mini express app ties to other express app or pluggable into other express app
 * this router has use, get, post and put etc middleware functions
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/products')
// const rootDir = require('../util/path');

let products = [];
 
// admin/add-product => Get
router.get('/add-product', productsController.getAddProduct);

// admin/add-product => Get
router.post('/add-product', productsController.postAddProduct);

router.post('/product', (req, res) => {
    console.log('body req = ', req.body) // gives undefined, if we don't use body-parser package at the top
    res.redirect('/admin/abc'); //redirect to another request route in node
});

router.get('/test-abc', (req, res) => {
    res.send('<h1>Product Added</h1>')
})


/**
 * Now this exports.routes store data - inherit to our node server as it is running and therefore it shared across all users
 * but we normally don't share data like that, due security and also this is a refrence it always have latest data onlt
 */
// exports.routes = router;
// exports.products = products;

module.exports = router;