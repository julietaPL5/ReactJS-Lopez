import { useEffect, useState } from "react";
import getItemById from "../Helpers/getItemById";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        getItemById(Number(id))
            .then((resp) => {
                setItem(resp)
            })
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
};

export default ItemDetailContainer;