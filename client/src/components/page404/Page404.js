import React from 'react';
import { Link } from 'react-router-dom';

import pageNotFoundImg from '../../images/page404.svg';

import Styles from './Page404.module.css';

const Page404 = () => {
  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.innerContainer}>
        <span className={Styles.notFoundHeader}>Page Not Found!</span>
        <img
          src={pageNotFoundImg}
          className={Styles.notFoundImg}
          alt='page-404'
        />
        <span className={Styles.goBackLink}>
          <Link to='/'>Click here to go back</Link>
        </span>
      </div>
    </div>
  );
};

export default Page404;
