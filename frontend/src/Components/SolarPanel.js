import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Sun} from './SolarSystem/Sun.js';
import {Planet} from './SolarSystem/Planet.js';
import {AstroidBelt} from './SolarSystem/AstroidBelt.js';

export class SolarPanel extends React.Component {
  render () {
    var earthDuration = 0.1;
    return (
      <div className={css(styles.wrapper)}>
        <Sun />
        <Planet background='#9f5e26' orbitRadius='50' size='5' duration={earthDuration * 87} /> {/*mercury*/}
        <Planet background='#BEB768' orbitRadius='70' size='8' duration={earthDuration * 224} /> {/*venus*/}
        <Planet background='#11abe9' orbitRadius='100' size='9' duration={earthDuration * 365} /> {/*earth*/}
        <Planet background='#cf3921' orbitRadius='130' size='15' duration={earthDuration * 687} /> {/*mars*/}
        <AstroidBelt noOfAstroids='400' innerR='130' outerR='200' duration={earthDuration * 3000} />
        <Planet background='#c76e2a' orbitRadius='200' size='12' duration={earthDuration * 4331} /> {/*jupiter*/}
        <Planet background='#e7c194' orbitRadius='220' size='13' duration={earthDuration * 10747/2} /> {/*saturn*/}
        <Planet background='#b5e3e3' orbitRadius='250' size='9' duration={earthDuration * 30589/2} /> {/*uranus*/}
        <Planet background='#175e9e' orbitRadius='280' size='13' duration={earthDuration * 59802/2} /> {/*neptune*/}
        <Planet background='#fff' orbitRadius='320' size='6' duration={earthDuration * 90580/2} /> {/*pluto*/}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25px',

    '@media (max-width: 877px)': {
      marginTop: '60px'
    }
  }
});
