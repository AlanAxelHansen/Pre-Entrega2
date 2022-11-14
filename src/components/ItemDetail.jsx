import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("¡Ordenaste " + qty + " productos!. ¡Gracias!");
    }

    return (
        <>
        {
        item && item.image
        ? 
            <section className='productoDetallecontainer'>
                <div className='detalleImagencontainer'>
                    <img className='Imagen' src={item.image[0]} />
                </div>
                <div className='infoContainer'>
                    <h1>{item.name}</h1>
                    <br></br>
                    <br></br>
                    <p>{item.description}</p>
                    <br></br>
                    <br></br>
                    <span>$ {item.cost}</span>
                    <br></br>
                    <br></br>
                    <p>{item.stock} unidades en stock</p>
                    <article className='detalleContador'>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </article>
                </div>
            </section>
        : <p>Procesando...</p>
        }
        </>
    );
}

export default ItemDetail;