import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginInAccount } from "../../store/authReducer"
import { Link, useNavigate } from "react-router-dom"
import s from './LoginIn.module.css'

const LoginIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const nav = useNavigate()
  const dispatch = useDispatch()

  const onHandleClick = () => {
    if(email == ''|| password == ''){
        setError(true)
    } else {
        dispatch(loginInAccount({email, password,nav}))
        setError(false)
    }
  }

  return (
<div className={s.center}>
<div className={s.block}>
  <h1 className={s.block_text}>Войти в аккаунт</h1>
  <div className={s.block_form}>
      <div className={s.block_form_input}>
          <p>Почта</p>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email"  placeholder="Введите почту..."/>
      </div>
      <div className={s.block_form_input}>
          <p>Пароль</p>
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Введите пароль...' type="password"/>
      </div>
  </div>
  <Link onClick={onHandleClick} className={s.block_button}>Войти</Link>
  <p className={s.error}>{error ? 'Заполните все бланки' : false}</p>
  <Link className={s.text} to={'/reg'}>если нет аккаунта, то зарегистрироваться</Link>
</div>
</div>
  )
}

export default LoginIn
