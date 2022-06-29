const fs = require('fs');
const path = require('path');

const Cart = require('./cart');

const dataFilePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(dataFilePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(dataFilePath, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(dataFilePath, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
};



// const path = require('path');
// const fs = require('fs');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'products.json'
//   );
  
//   const getProductsFromFile = (cb) => {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       } else {
//         cb(JSON.parse(fileContent));
//       }
//     });
//   };

// // const products = [];

// module.exports = class Product {
//     constructor(title, imageUrl, description, price) {
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//   }

//     save() {
//         // products.push(this);
//         const p = path.join(path.dirname(require.main.filename), 'data', 'products.json'); // mean create file in ./data/product.json
//         fs.readFile(p, (err, filenContent) => {
//             console.log(filenContent)
//         });
//         fs.readFile(p, (err, filenContent) => {
//             let products = [];
//             if (!err) {
//                 products = JSON.parse(filenContent);
//             }
//             products.push(this);
//                 fs.writeFile(p, JSON.stringify(products), (err) => {
//                 console.log(err);
//             })

//         })
//     }

//     static fetchAll(callback) {
//         getProductsFromFile(callback);
//         // const p = path.join(path.dirname(require.main.filename), 'data', 'products.json'); // mean create file in ./data/product.json

//         // fs.readFile(p, (err, filenContent) => {
//         //     if (!err) {
//         //         // return [];
//         //         callback([])
//         //     }
//         //     callback(JSON.parse(filenContent));
//         // })
//         // return products;
//     }
// }