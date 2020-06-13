import React, { Fragment } from 'react';

import footerSvg from '../../images/desktop/svg-footer.png';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <Fragment>
      <div className={Styles.footerSvg}>
        <img src={footerSvg} className={Styles.footerSvg} />
      </div>
      <div className={Styles.footer}>
        <span className={Styles.footerTxt}>
          Created By: Sayuj Sehgal Copyright &copy; 2020
        </span>
      </div>
    </Fragment>
  );
};

export default Footer;
