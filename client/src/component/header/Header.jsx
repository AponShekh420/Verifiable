import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/verifiable.png';
import Classes from '../../styles/header/headerStyle.module.css';
const Header = () => {
  return (
    <div className={Classes.header}>
      <div className={Classes.container}>
        <div className={Classes.logoBox}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={Classes.menuBox}>
          <ul className={Classes.menuList}>
            <li><NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? Classes.active : Classes.deactive
              }
            >Home</NavLink></li>
            <li><NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? Classes.active : Classes.deactive
              }
            >Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Header;