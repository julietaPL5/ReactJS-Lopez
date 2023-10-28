import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../utils/config";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        
        const docRef = doc(database, "products", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                )
            })

    }, [id])

    return (
        <div className="itemDetailContainer">
            {item && <ItemDetail item={item} />}
        </div>
    )
};

export default ItemDetailContainer;