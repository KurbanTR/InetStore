import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import s from '../style/Header.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, signOutFromAccount } from './store/authReducer'

const Header = () => {
  const {token} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const onHandleClick = () => {
    dispatch(signOutFromAccount())
    dispatch(setToken(null))
  }
  
  return (
    <header>
        <div className={s.header}>
            <div className={s.header_block}>
                <div className={s.header_icon}>IT-Academy</div>
                <div className={s.header_link}>
                    <Link className={s.link} to='/'>Товары</Link>
                    {token && <Link className={s.link} to='/korthina'>Корзина</Link>}
                    {!token ? <Link className={s.link} to='/vhod'>Войти</Link> : <Link to='/' onClick={onHandleClick} className={s.link}>Выйти</Link>}
                </div>
                <div className={s.header_menu}>
                  <Menu>
                    <MenuButton>
                      Menu
                    </MenuButton>
                    <MenuList>
                      <MenuItem><Link to='/'>Товары</Link></MenuItem>
                      <MenuItem><Link to='/korthina'>Корзина</Link> </MenuItem>
                      <MenuItem><Link to='/vhod'>Войти</Link></MenuItem>
                    </MenuList>
                  </Menu>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
