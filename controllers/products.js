const Product = require("../models/product");

 
/** This is file containes all the function wchich are related to products whether they are in shop aor admin routes */
exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    /** below code for pug template*/
    // res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
    /** below code for handlebars template*/
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true 
    });
}

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/shop');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
          });

    }); // because fetchAll is static static method
    console.log('shop', products);
    /**
     * The render method should allow us to pass and add data to view template usong js object using a key name like below
     * In pug view engine we can access this props using #{docTitle}
     */
    // res.sendFile(path.join(rootDir, 'views', 'shop.html' ));
    // /** below line for pug */
    // res.render('shop' , { prods: adminData.products, pageTitle: 'Shop' }); // don't need to define .pug bcz we made pug the default view engine in app.js
    /** below line for handlebars */
    
}