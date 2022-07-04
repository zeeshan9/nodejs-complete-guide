const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log("body ", req.body)
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // console.log('user id  ', req.user.id)
  // const product = new Product(null, title, imageUrl, description, price);
  req.user
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    }).then((result) => {
      console.log('Create Product');
      res.redirect('/admin/products');
    })
    .catch((error) => {
      console.log('Created Product error: ');
    })
  // Product.create({
  //   title: title,
  //   price: price,
  //   imageUrl: imageUrl,
  //   description: description,
  //   userId: req.user.id,
  // }).then(result => {
  //   console.log(result);
  //   res.redirect('/admin/products');
  // }).catch(err => {
  //   console.log(err);
  // })
  /* save in file */
  // product.execute().then(() => {
  //   res.redirect('./');  
  // }).catch(err => console.log(err))
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user.getProducts({where: { id: prodId}})
  // Product.findByPk(prodId)
  .then((products) => {
    const product = products[0]
    if(!product) {
      res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    })
  })
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId).then((product) => {
      product.title = updatedTitle,
      product.price = updatedPrice,
      product.imageUrl = updatedImageUrl,
      product.description = updatedDesc
      return product.save();
  }).then((result) => {
      console.log('Updated Product');
      res.redirect('/admin/products')
  }).catch((error) => {
    console.log(error)
  });

};

exports.getProducts = (req, res, next) => {
  req.user.getProducts()
  // Product.findAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err => {console.log(err)});
  // Product.fetchAll(products => {
  //   res.render('admin/products', {
  //     prods: products,
  //     pageTitle: 'Admin Products',
  //     path: '/admin/products'
  //   });
  // });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId).then((product) => {
    return product.destroy();
  }).then((result) => {
    console.log('Destroy Product')
    res.redirect('/admin/products');
  }).catch((err) => {
    console.log(err)
  })
  // Product.deleteById(prodId);
};
 