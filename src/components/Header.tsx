import { NavLink } from 'react-router-dom'
import styles from '../styles/header/_header.module.scss'

const Header = () => {
  return(
    <div className={styles.header}>
      <NavLink to='/posts' className={styles.header__logo}>Blog</NavLink>
      <NavLink to='/authorization' className={styles.header__login}>Log in</NavLink>
    </div>
  )
}

export default Header