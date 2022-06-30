const Sequelize = require("sequelize")
 
 const sequelize = require('../util/database');

 /* Difining table name and column */
 const Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      alowNull: false,
      primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
      type: Sequelize.DOUBLE,
      alowNull:false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull:false,
    }
 });

 module.exports = Product;


/* Data save using file system */
// const db = require('../util/database');
// const Cart = require('./cart');

// // const fs = require('fs');
// /* used for file instead db in start for learning */
// // const path = require('path');


// // const dataFilePath = path.join(
// //   path.dirname(process.mainModule.filename),
// //   'data',
// //   'products.json'
// // );
// // const getProductsFromFile = cb => {
// //   fs.readFile(dataFilePath, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       'INSERT INTO products (title, description, price, imageUrl) VALUES (?, ?, ?, ?)',
//       [this.title, this.description, this.price, this.imageUrl]
//     );
    
//     // getProductsFromFile(products => {
//     //   if (this.id) {
//     //     const existingProductIndex = products.findIndex(
//     //       prod => prod.id === this.id
//     //     );
//     //     const updatedProducts = [...products];
//     //     updatedProducts[existingProductIndex] = this;
//     //     fs.writeFile(dataFilePath, JSON.stringify(updatedProducts), err => {
//     //       console.log(err);
//     //     });
//     //   } else {
//     //     this.id = Math.random().toString();
//     //     products.push(this);
//     //     fs.writeFile(dataFilePath, JSON.stringify(products), err => {
//     //       console.log(err);
//     //     });
//     //   }
//     // });
//   }

//   static deleteById(id) {
//     // getProductsFromFile(products => {
//     //   const product = products.find(prod => prod.id === id);
//     //   const updatedProducts = products.filter(prod => prod.id !== id);
//     //   fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//     //     if (!err) {
//     //       Cart.deleteProduct(id, product.price);
//     //     }
//     //   });
//     // });
//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products');
//     // getProductsFromFile(cb);
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products which products.id = ?', [id])
//     // getProductsFromFile(products => {
//     //   const product = products.find(p => p.id === id);
//     //   cb(product);
//     // });
//   }
// };
