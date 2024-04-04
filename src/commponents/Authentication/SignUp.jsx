import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginInAccount } from "../store/authReducer"

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const onHandleClick = () => {
    if(email == ''|| password == ''){
        false
    } else {
        const user = {email, password}
        dispatch(loginInAccount(user))
    }
  }

  return (
    <div style={{position: 'relative', top: '150px'}}>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="email"/>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="email" placeholder="password"/>
      <button onClick={onHandleClick}>Войти</button>
    </div>
  )
}

export default SignUp
