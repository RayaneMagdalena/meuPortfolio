import styles from './Header.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../../public/assets/logo.png'

const Header = () => {
  return (
    <header className={styles.navbar}>
<img src={logo} alt="logo da página" className={styles.navbarImg}/>
      <nav className={styles.navbarMenu}> 
        <NavLink to="/" className={styles.navbarItem}> Home </NavLink>
        <NavLink to="/" className={styles.navbarItem}> sobre </NavLink>
        <NavLink to="/" className={styles.navbarItem}> Habilidades </NavLink>
        <NavLink to="/" className={styles.navbarItem}> Projetos </NavLink>
        <NavLink to="/contato" className={styles.navbarItem}> Contato </NavLink>
      </nav>
    </header>
  );
};

export default Header;
