import { Link } from 'react-router-dom';

const Item = ({ id, stock, price, pictureUrl }) => {
    return (
        <section className='productoContenedor'>
            <img className='productoImagen' src={pictureUrl}/>
            <div className='productoContenedordetalles'>
                <article className='precio'>
                    <strong>$ {price}</strong>
                </article>
                <article className='unidades'>
                    {stock} unid.
                </article>
                <article className='detalles'>
                    <Link to={`/item/${id}`}>Ver</Link>
                </article>
            </div>
        </section>
    );
}

export default Item;