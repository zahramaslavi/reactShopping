const url = 'http://localhost:3001'

export default {
    getProducts: (cb) => {
        fetch(url + '/products')
        .then((res) => res.json())
        .then((result) => {
            cb(result);
        });
    },
    buyProducts: (data, cb) => {
        setTimeout(() => {
            fetch(url + '/orders', {method: 'POST', body: JSON.stringify(data)})
            .then((res) => res.json())
            .then((result) => {
                cb(result);
            });
        }, 2000) //needed to simulate some delay

        
    }
}