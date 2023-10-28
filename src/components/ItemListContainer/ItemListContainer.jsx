import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from "../../utils/config";


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        
        const productsRef = collection(database, "products");
        const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

        getDocs(q)
            .then((resp) => {
                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

    }, [category]);

    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer