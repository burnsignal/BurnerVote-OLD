
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import SunImage from '../../Assets/Img/Header/SolarSystem/Sun.svg';
// import SunImage from 'Assets/Img/Header/SolarSystem/Sun.svg';

export class Sun extends React.Component {
  render () {
    return (
      <div className ={css(styles.sun)}>
        {/* <img className ={css(styles.sun)} src='Assets/Img/Header/SolarSystem/Sun.svg' alt='Sun' /> */}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  sun: {
    height: '50px',
    width: '50px',
    position: 'absolute',

    background:'radial-gradient(ellipse at center, #ffd000 1%,#f9b700 39%,#f9b700 39%,#e06317 100%)',
    backgroundClip: 'padding-box',
    border: 0,
    backgroundSize: '175%',
    boxShadow: '0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13)',
    borderRadius:'50px'
  }
});