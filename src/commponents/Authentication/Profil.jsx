import { useState } from "react";
import { useSelector } from "react-redux"
import s from './Profil.module.css'
import { Modal } from "antd";
// import ava from '../../assets/image 9.png'

const Profil = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {email} = useSelector(state => state.user)
    const {name} = useSelector(state => state.user)

    const [nameInput, setName] = useState('')
    const [emailInput, setEmail] = useState('')

    const [error, setError] = useState('')

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onHandleClick = (e) => {
      e.preventDefault()
      if(!nameInput || !emailInput){
          setError(true)
      } else { 
              setError(false)
              // dispatch()
              handleCancel()
          } 
      } 
  return (
    <div className={s.center} style={{position: 'relative', top: '100px'}}>
      <p className={s.title}>Личный кабинет</p>
      <img className={s.avatar} src='../public/image 9.png'/>
      <div className={s.infos}>
      <div className={s.info}>
        <p className={s.info_title}>Почта</p>
        <div className={s.info_}>{email}</div>
      </div>
      <div className={s.info}>
        <p className={s.info_title}>Имя</p>
        <div className={s.info_}>{name}</div>
      </div>
      </div>
      <button onClick={showModal} className={s.button}>Изменить данные</button>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h2 className={s.modal_title}>Изменить данные</h2>
        <form onSubmit={e => onHandleClick(e)} className={s.modal_form}>
          <label className={s.modal_label}>Имя</label>
          <input value={nameInput} onChange={e => setName(e.target.value)} className={s.modal_input}/>

          <label className={s.modal_label}>Фото профиля (URL)</label>
          <input value={emailInput} onChange={e => setEmail(e.target.value)} className={s.modal_input}/>

          <p className={s.modal_error}>{error ? 'Заполните все бланки' : false}</p>
          <button className={s.modal_button}>Сохранить</button>
        </form>
      </Modal>
    </div>
  )
}

export default Profil
