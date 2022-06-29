const express = require('express');
const router = express.Router();
const path = require('path');
// const rootDir = require('../util/path');
// const productsController = require('../controllers/products')
const shopController = require('../controllers/shop');


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

// router.get('/', productsController.getProducts);

router.get('/test', (req, res) => {
    /** __dirname refer to the current directory in which we are in and it works well both on linux system and windows system*/
    console.log('dirname = ', __dirname);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;