import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../images/404-img.jpg';

import Styles from './Page404.module.css';

const Page404 = () => {
  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.innerContainer}>
        <img src={NotFoundImg} alt='404-image' className={Styles.notFoundImg} />
        <span className={Styles.goBackLink}>
          <Link to='/'>Click here to go back</Link>
        </span>
      </div>
    </div>
  );
};

export default Page404;
