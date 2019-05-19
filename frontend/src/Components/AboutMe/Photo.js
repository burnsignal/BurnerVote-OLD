import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';

export class Photo extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.wrapper} >
        <img className={css(styles.img)} src='Assets/Img/AboutMe/JonathanHeadshot.jpg' alt='Headshot' />
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '360px',
    height: '360px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '20px',
    borderRadius: '360px'
  },
  img: {
    width: '340px',
    height: '340px',
    borderRadius: '340px'
  }
});
