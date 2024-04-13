import { useState } from 'react';
import { useSelector } from 'react-redux'
import s from '../style/Korz.module.css'
import { Modal } from "antd";

const Korz = () => {
  const {buscket} = useSelector(store => store.todos)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [error, setError] = useState('')
  const [nomer, setNomer] = useState('')
  const [adres, setAdres] = useState('')

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onAddClick = (e) => {
    e.preventDefault()
    if(adres == ''|| nomer == ''){
      setError(true)
    } else { 
      setError(false)
      handleCancel()
    } 
  } 

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
                    <button className={s.buy} onClick={showModal}>Buy</button>
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
    <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h2 className={s.modal_title}>Добавление товара</h2>
      <form onSubmit={e => onAddClick(e)} className={s.modal_form}>
        <label className={s.modal_label}>Номер</label>
        <input value={nomer} onChange={e => setNomer(e.target.value)} className={s.modal_input} type='number'/>

        <label className={s.modal_label}>Цена</label>
        <input value={adres} onChange={e => setAdres(e.target.value)} type='number' className={s.modal_input}/>

        <p className={s.modal_error}>{error ? 'Заполните все бланки' : false}</p>
        <button className={s.modal_button}>Добавить товар</button>
        </form>

    </Modal>
  </div>
  )
}

export default Korz
