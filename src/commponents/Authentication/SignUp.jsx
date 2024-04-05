import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginInAccount } from "../store/authReducer"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {token} = useSelector(state => state.user)
  const nav = useNavigate()

  const dispatch = useDispatch()
  const onHandleClick = () => {
    if(email == ''|| password == ''){
        false
    } else {
        const user = {email, password}
        dispatch(loginInAccount(user))
        token && nav('/profil')
    }
  }

  return (
    <div style={{position: 'relative', top: '150px'}}>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="email"/>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="email" placeholder="password"/>
      <button onClick={onHandleClick}>Войти</button>
      <Link to='/reg'>если нет аккаунта, то зарегестрироваться</Link>
    </div>
  )
}

export default SignUp
