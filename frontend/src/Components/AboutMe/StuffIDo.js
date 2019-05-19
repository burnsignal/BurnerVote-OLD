import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {TextButton} from '../UI/TextButton.js';

export class StuffIDo extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.title)}>Check out some of the cool stuff I do!</div>
        <div className={css(styles.buttonWrapper)}>
          <TextButton className={styles.button} text='Drones' href='https://www.youtube.com/channel/UCobkvnXKkRl-eTIQxBdpCPA?view_as=subscriber' color='#fff' hoverColor='#ffd377' />
          <TextButton className={styles.button} text='Blog' href='https://medium.com/@jspsun' color='#fff' hoverColor='#ffd377' />
          <TextButton className={styles.button} text='Music' href='https://open.spotify.com/user/jspsun' color='#fff' hoverColor='#ffd377' />
          <TextButton className={styles.button} text='Hackathons' href='https://devpost.com/jspsun' color='#fff' hoverColor='#ffd377' />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    marginTop: '80px'
  },

  title: {
    marginLeft: '20px',
    marginRight: '20px',
    fontSize: '40px',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'justify',
    textAlignLast: 'center',
    '@media (max-width: 877px)': {
      fontSize: '30px'
    }
  },

  buttonWrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '30px',
    padding: '10px'
  },

  button: {
    width: '200px',
    height: '75px',
    fontSize: '20px',
    margin: '10px',
    flexShrink: '1'
  }
});
