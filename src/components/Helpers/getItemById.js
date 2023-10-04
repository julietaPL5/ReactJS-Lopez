import data from '../../products.json';

const getItemById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = data.find((el) => el.id === id)

            if(item) {
                resolve(item)
            } else {
                reject({
                    error: "No se encontro el producto."
                })
            }
        }, 500) 
    })
};

export default getItemById;
