import s from '../style/Katalog.module.css'
import { useDispatch, useSelector} from 'react-redux'
import { addBusket } from '../store/todoReducer';
const Katalog = () => {
  const {products} = useSelector(state => state.todos)
  const {token} = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <div className='animated'>
      <p className={s.name}>Каталог товаров</p>
        <div className={s.card}>
            {
                products?.map(tovar => 
                    <div key={tovar.id} className={s.card_tovar}>
                        <p/>
                        <img src={tovar.image} className={s.image} alt="IMAGE"/>
                        <div className={s.card_name}>
                          <h3 className={s.card_title}>{tovar.title}</h3>
                          {token && <button onClick={() => dispatch(addBusket(tovar))} className={s.button}>В корзину</button>}
                        </div>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Katalog
