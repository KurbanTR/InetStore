import { useState } from "react"
import { useDispatch } from "react-redux"
import { createAccount } from "../store/authReducer"
import { Link } from "react-router-dom"

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const onHandleClick = () => {
    if(email == ''|| password == ''){
        false
    } else {
        const user = {email, password}
        dispatch(createAccount(user))
    }
  }

  return (
    <div style={{position: 'relative', top: '150px'}}>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="email"/>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="email" placeholder="password"/>
      <button onClick={onHandleClick}>Зарегестрироваться</button>
      <Link to='/vhod'>если есть аккаунт, то войти</Link>
    </div>
  )
}

export default SignIn
