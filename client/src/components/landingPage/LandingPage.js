import React, { Fragment } from 'react';
import headerSvg from '../../images/desktop/svg-header.png';
import chatMan from '../../images/desktop/chat-man.png';
import footerSvg from '../../images/desktop/svg-footer.png';
import { motion } from 'framer-motion';

import Styles from './LandingPage.module.css';
const LandingPage = () => {
  return (
    <Fragment>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <img src={headerSvg} className={Styles.headerSvg} />

          <div className={Styles.headerTxtContainer}>
            <span>what is a chatMe?</span>
            <br />
            <span>ChatMe Is A Way To Communicate To Other Users.</span>
          </div>
        </div>
        <div className={Styles.middleContainer}>
          <motion.div
            className={Styles.chatImgContainer}
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ duration: 1, yoyo: Infinity }}
          >
            <img src={chatMan} className={Styles.chatImg} />
          </motion.div>

          <div className={Styles.featuresTxtContainer}>
            <h2>Features</h2>
            <div className={Styles.featureTxt}>
              <ul>
                <li>Users can create/join online rooms.</li>
                <li>Users can send/receive messages to other users.</li>
                <li>ChatMe does not store your messages.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.footerSvg}>
          <img src={footerSvg} className={Styles.footerSvg} />
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
