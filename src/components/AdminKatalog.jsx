import s from '../style/AdminKatalog.module.css'
import { useDispatch, useSelector } from "react-redux"
import deletee from '../img/delete.png'
import { Modal } from "antd";
import { useState } from 'react';
import { deleteDefineDoc, setProductData } from '../store/todoReducer';

const AdminKatalog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const [error, setError] = useState('')

    const {products} = useSelector((state) => state.todos)
    const dispatch = useDispatch()

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
      if(title == ''|| price == ''||description == ''|| image == ''){
        setError(true)
      } else { 
        setError(false)
        dispatch(setProductData({title,price,description,image}))
        handleCancel()
        console.log(products)
      } 
    } 

    const onDeleteClick = (id) =>{
      dispatch(deleteDefineDoc({id}))
      console.log(id);
    }
  return (
    <>
      <p className={s.name}>Вы вошли как Админ</p>
      <div className={s.block}>
        <p className={s.block_text}>Новые товары</p>
        <div className={s.block_tovars}>
            {
                products?.map(tovar =>
                    <div key={tovar.id} className={s.tovar}>
                      <p className={s.tovar_name}>{tovar.title}</p>
                      <img src={deletee} onClick={()=>onDeleteClick(tovar.id)} alt="x" className={s.delete}/>
                    </div>
                )
            }
        </div>
        <div className={s.block_button}>
            <button onClick={showModal} className={s.button}>Добавить товар</button>
        </div>
      </div>
      <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h2 className={s.modal_title}>Добавление товара</h2>
        <form onSubmit={e => onAddClick(e)} className={s.modal_form}>
          <label className={s.modal_label}>Название</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className={s.modal_input}/>

          <label className={s.modal_label}>Цена</label>
          <input value={price} onChange={e => setPrice(e.target.value)} type='number' className={s.modal_input}/>

          <label className={s.modal_label}>Описание</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className={s.modal_inputBig}/>

          <label className={s.modal_label}>Изображение</label>
          <input value={image} onChange={e => setImage(e.target.value)} className={s.modal_input}/>

          <p className={s.modal_error}>{error ? 'Заполните все бланки' : false}</p>
          <button className={s.modal_button}>Добавить товар</button>
        </form>

      </Modal>
    </>
  )
}
export default AdminKatalog
