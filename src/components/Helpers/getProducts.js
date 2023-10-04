import data from '../../products.json';

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
};

export default getProducts;