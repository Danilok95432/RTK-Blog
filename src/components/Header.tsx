import styles from '../styles/header/_header.module.scss'

const Header = () => {
  return(
    <div className={styles.header}>
      <button className={styles.login_btn}>Login</button>
    </div>
  )
}

export default Header