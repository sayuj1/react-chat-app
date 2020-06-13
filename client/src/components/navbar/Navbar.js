import React, { Fragment, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import ChatContext from '../../context/chat/chatContext';

import Styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const { user } = useContext(ChatContext);

  return (
    <Fragment>
      <div className={Styles.container}>
        <div className={Styles.logoContainer}>
          <img src={logo} className={Styles.logo} />

          <span className={Styles.logoTxt}>ChatMe</span>
        </div>
        <div className={Styles.joinBtnContainer}>
          {user !== null ? (
            <Link to='/join'>
              <button className={Styles.logoutBtn}>Logout</button>
            </Link>
          ) : location.pathname === '/' ? (
            <Link to='/join'>
              <button className={Styles.joinBtn}>Join</button>
            </Link>
          ) : (
            <Link to='/'>
              <button className={Styles.joinBtn}>Go back</button>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
