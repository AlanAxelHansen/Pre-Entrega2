import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className='productoContenedor'>
            {
                items.length > 0
                    ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
                    : <p>Procesando...</p>
            }
        </div>
    );
}

export default ItemList;