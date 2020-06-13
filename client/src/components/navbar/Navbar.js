import React, { Fragment } from 'react';
import logo from './logo.svg';

import Styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <Fragment>
      <div className={Styles.container}>
        <div className={Styles.logoContainer}>
          <img src={logo} className={Styles.logo} />

          <span className={Styles.logoTxt}>ChatMe</span>
        </div>
        <div className={Styles.joinBtnContainer}>
          <button className={Styles.joinBtn}>Join</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
