const path = require('path');
const fs = require('fs');

// const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        // products.push(this);
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json'); // mean create file in ./data/product.json
        fs.readFile(p, (err, filenContent) => {
            console.log(filenContent)
        });
        fs.readFile(p, (err, filenContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(filenContent);
            }
            products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })

        })
    }

    static fetchAll(callback) {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json'); // mean create file in ./data/product.json

        fs.readFile(p, (err, filenContent) => {
            if (!err) {
                // return [];
                callback([])
            }
            callback(JSON.parse(filenContent));
        })
        // return products;
    }
}