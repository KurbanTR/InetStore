import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import s from '../style/Header.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeProfile, signOutFromAccount } from '../store/authReducer'

const Header = () => {
  const {token} = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onHandleClick = () => {
    dispatch(signOutFromAccount())
    dispatch(removeProfile())
  }
  
  return (
    <header>
        <div className={s.header}>
            <div className={s.header_block}>
                <div className={s.header_icon}>IT-Academy</div>
                <div style={{display: 'flex', gap: '1em'}}>
                  <div className={s.header_link}>
                    <Link className={s.link} to='/'>Товары</Link>
                    {token && <Link className={s.link} to='/korthina'>Корзина</Link>}
                    {!token ? <Link className={s.link_vhod} to='/vhod'>Войти</Link> : <Link to='/' onClick={onHandleClick} className={s.link_out}>Выйти</Link>}
                  </div>
                  <div className={s.header_menu}>
                    <Menu>
                      <MenuButton>Menu</MenuButton>
                      <MenuList>
                        <MenuItem><Link to='/'>Товары</Link></MenuItem>
                        {token && <MenuItem><Link to='/korthina'>Корзина</Link></MenuItem>}
                        {!token ? <MenuItem><Link to='/vhod'>Войти</Link></MenuItem> : <MenuItem><Link to='/' onClick={onHandleClick}>Выйти</Link></MenuItem>}
                      </MenuList>
                    </Menu>
                    </div>
                  <Link to={token ? '/profil' : 'vhod'}><img src="../public/image 9.png" alt="profil" /></Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
