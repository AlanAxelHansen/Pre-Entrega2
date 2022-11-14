import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <section className='contadorBoton'>
            <Button variant="text" onClick={sumar}>+</Button>
            <div>{count}</div>
            <Button variant="text" onClick={restar}>-</Button>
            {
                stock
                ? <Button  onClick={() => onAdd(count)}>Añadir</Button>
                : <Button  disabled>Añadir</Button>
            }
            
        </section>
    );
}

export default ItemCount;