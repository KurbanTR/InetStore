import s from '../style/Katalog.module.css'
import { data } from './Data'
import { useContext } from 'react';
import { SomeContext } from './context';

const Katalog = () => {
  const { addToCart } = useContext(SomeContext); 
  console.log(data);
  return (
    <div>
      <p className={s.name}>Каталог товаров</p>
        <div className={s.card}>
            {
                data?.map(tovar => 
                    <div key={tovar.id} className={s.card_tovar}>
                        <img src={tovar.image} className={s.image} alt="IMAGE"/>
                        <div className={s.card_name}>
                          <h3 className={s.card_title}>{tovar.title}</h3>
                          <button onClick={() => addToCart(tovar)} className={s.button}>В корзину</button>
                        </div>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Katalog
