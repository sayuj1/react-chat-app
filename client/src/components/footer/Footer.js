import React, { Fragment } from 'react';

import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <Fragment>
      <div className={Styles.footer}>
        <span className={Styles.footerTxt}>
          Created By: Sayuj Sehgal Copyright &copy; 2020
        </span>
      </div>
    </Fragment>
  );
};

export default Footer;
