import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import s from '../style/Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className={s.header}>
            <div className={s.header_block}>
                <div className={s.header_icon}>IT-Academy</div>
                <div className={s.header_link}>
                    <Link className={s.link} to='/'>Товары</Link>
                    <Link className={s.link} to='/korthina'>Корзина</Link>
                </div>
                <div className={s.header_menu}>
                  <Menu >
                    <MenuButton>
                      Menu
                    </MenuButton>
                    <MenuList>
                      <MenuItem><Link to='/'>Товары</Link></MenuItem>
                      <MenuItem><Link to='/korthina'>Корзина</Link> </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
