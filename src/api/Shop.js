const url = 'http://localhost:3001'

export default {
    getProducts: (cb) => {
        fetch(url + '/products')
        .then((res) => res.json())
        .then((result) => {
            cb(result);
        });
    },
    buyProduct: (cb) => {
        fetch(url + '/orders', {method: 'POST'})
        .then((res) => {
            cb(res);
        });
    }
}