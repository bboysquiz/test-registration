import React from 'react';
import './header.sass';
import { Link } from 'react-router-dom';
import { setLogout } from '../../store/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const login = useSelector(state => state.login.login);
  const dispatch = useDispatch();

  function logout() {
    dispatch(setLogout());
    window.location.assign('http://localhost:3000/Login');

  }

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">
          REGISTRATIONARIUM
        </h1>
        <span className="header__logo-descr">Get the best registration experience </span>
        <nav className="header__nav">
          <ul className="header__ul">
            <Link to="../" className="header__link">
              <li className="header__li">Main</li>
            </Link>
            <Link to="../Login" className="header__link">
              <li className="header__li">Login</li>
            </Link>
            <Link to="../Registration" className="header__link">
              <li className="header__li">Registration</li>
            </Link>
            <Link to="../Profile" className="header__link">
              <li className="header__li">Profile</li>
            </Link>
          </ul>
        </nav>
        <button onClick={logout}
                className={`header__logout ${login ? 'header__logout_showed' : 'header__logout_hiden'}`}>Log out
        </button>
      </div>
    </header>
  );
};


export default Header;
