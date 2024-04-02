import s from '../style/AdminKatalog.module.css'
import { useDispatch, useSelector } from "react-redux"
import deletee from '../img/delete.png'
import { Modal } from "antd";
import { useState } from 'react';

const AdminKatalog = () => {
    const {product} = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <>
      <p className={s.name}>Вы вошли как Админ</p>
      <div className={s.block}>
        <p className={s.block_text}>Новые товары</p>
        <div className={s.block_tovars}>
            {
                product?.map(tovar =>
                    <div key={tovar.id} className={s.tovar}>
                      <p className={s.tovar_name}>{tovar.title}</p>
                      <img src={deletee} alt="x" className={s.delete}/>
                    </div>
                )
            }
        </div>
        <div className={s.block_button}>
            <button onClick={showModal} className={s.button}>Добавить товар</button>
        </div>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h2 className={s.modal_title}>Добавление товара</h2>
        <form className={s.modal_form}>
            <label className={s.modal_label}>Название</label>
            <input className={s.modal_input}/>

            <label className={s.modal_label}>Цена</label>
            <input type='number' className={s.modal_input}/>

            <label className={s.modal_label}>Описание</label>
            <textarea className={s.modal_inputBig}/>

            <label className={s.modal_label}>Изображение</label>
            <input className={s.modal_input}/>

            <button className={s.modal_button}>Добавить товар</button>
        </form>
      </Modal>
    </>
  )
}

export default AdminKatalog
