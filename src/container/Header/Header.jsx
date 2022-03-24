import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';
import AppWrap from '../../wrapper/AppWrap';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <motion.div className="badge-cmp app__flex"  whileHover={{ scale: 1.1}} >
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Bem vindo a</p>
            <h1 className="head-text">Revolução Web3</h1>
          </div>
        </motion.div>

        <motion.div className="tag-cmp app__flex" whileHover={{ scale: 1.1}}>
          <p className="p-text">SOMOS UMA <strong>AGENCIA WEB3</strong></p>
          <p className="p-text">QUE DESENVOLVE <strong>SOLUÇÕES DISRUPTIVAS</strong></p>
          <p className="p-text">PARA O <strong>AVANÇO DA HUMANIDADE</strong></p>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 3, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <motion.img
         transition={{ repeat: Infinity, duration: 5 }}
         whileInView={{rotate: [0,360]}}
         src={images.logosnake}
         alt="profile_circle"
         className="overlay_circle"
      />
      <img src={images.logoclean} alt="profile_bg" />

    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.solidity, images.ethereum].map((circle, index) => (
        <motion.div whileHover={{ scale: 1.2}} className="circle-cmp app__flex" key={`circle-${index}` }>
          <img src={circle} alt="profile_bg" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');