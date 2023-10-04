

const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.img} alt={item.name} />
            <div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
            </div>
        </div>
    )
};

export default ItemDetail;