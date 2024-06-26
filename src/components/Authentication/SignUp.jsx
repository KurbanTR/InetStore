import { useState } from "react"
import { createAccount } from "../../store/authReducer"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import s from './SignUp.module.css'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [andpassword, setAndPassword] = useState('')
  const [offPassword, setOffPassword] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onHandleClick = async () => {
    if(name === '' || email === '' || password === '' || andpassword === ''){
      setError(true);
    } else { 
      if(password !== andpassword){
        setOffPassword(true);
      } else {
        setError(false);
        setOffPassword(false);
        dispatch(createAccount({ name, email, password, nav }));
      }
      }
    }
  return (
    <div className={s.center}>
      <div className={s.block}>
        <h1 className={s.block_text}>Регистрация аккаунта</h1>
        <div className={s.block_form}>        
          <div className={s.block_form_input}>
            <p>Имя</p>
            <input value={name} onChange={e=>setName(e.target.value)} type="text"  placeholder="Введите имя..."/>
          </div>    
          <div className={s.block_form_input}>
              <p>Почта</p>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="email"/>
          </div>
          <div className={s.block_form_input}>
              <p>Пароль</p>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"/>
          </div>
          <div className={s.block_form_input}>
              <p>Повторите пароль</p>
              <input value={andpassword} onChange={(e)=>setAndPassword(e.target.value)} type="password" placeholder="password"/>
              <p className={s.error}>{offPassword ? 'Повторный пароль не похож на предыдущий' : false}</p>
          </div>
        </div>
        <Link onClick={onHandleClick} className={s.block_button}>Зарегистрироваться</Link>
        <p className={s.error}>{error ? 'Заполните все бланки' : false}</p>
        <Link to='/vhod'>если есть аккаунт, то войти</Link>
      </div>
    </div>
  )
}

export default SignUp
