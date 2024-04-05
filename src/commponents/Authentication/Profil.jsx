import { useSelector } from "react-redux"

const Profil = () => {
    const email = useSelector(state => state.user.email)
  return (
    <div style={{position: 'relative', top: '150px'}}>
      <h1>Hi, User</h1>
      <h2>{email}</h2>
    </div>
  )
}

export default Profil
