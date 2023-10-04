import { useState } from 'react';
import { useEffect } from 'react';
import getProducts from '../Helpers/getProducts';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);
    const category = useParams().category;
    console.log(category);

    useEffect(() => {
        getProducts()
        .then((resp) => {
            if(category) {
                setProducts(resp.filter((prod) => prod.category === category));
            } else {
                setProducts(resp);                
            }
        })
    }, [category])

    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer