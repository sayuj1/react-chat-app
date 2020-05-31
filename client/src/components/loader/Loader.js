import React from 'react';

import Styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={Styles.loaderContainer}>
      <div className={Styles.loader}>
        <span className={Styles.loaderTxt}>Loading...</span>
        <div className={Styles.loaderIcon}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            style={{ margin: 'auto', background: 'none' }}
            width='200'
            height='200'
            display='block'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 100 100'
          >
            <circle
              cx='50'
              cy='50'
              r='35'
              fill='none'
              stroke='#32495c'
              strokeDasharray='164.93361431346415 56.97787143782138'
              strokeWidth='10'
              transform='rotate(110.12 50 50)'
            >
              <animateTransform
                attributeName='transform'
                dur='1s'
                keyTimes='0;1'
                repeatCount='indefinite'
                type='rotate'
                values='0 50 50;360 50 50'
              ></animateTransform>
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loader;
