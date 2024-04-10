import { useSelector } from 'react-redux'
import s from '../style/Korz.module.css'

const Korz = () => {
  const {buscket} = useSelector(store => store.todos)
  return (
    <div className='animated'>
      <div className={s.cart_div}>
      <div className={s.cart_div_canter}>
        <div className={s.cart_center_div}>
          {buscket.length !== 0 ? buscket.map((item, index) => (
              <div className={s.cart_big_div} key={index}>
                <div className={s.cart_image_div}>
                  <img className={s.cart_image} src={item.image} />
                  <div className={s.cart_center_title}>
                    <h2 className={s.cart_center_title}>{item.title} - {item.price} сом</h2>
                    <h3 className={s.cart_center_desc}>{item.description}</h3>
                  </div>
                </div>
              </div> 
            )):
            <div className={s.error}>
              <p className={s.error_p}>Здесь пусто</p>
            </div>
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Korz
