import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {StarField} from './SolarSystem/StarField.js';
import {Photo} from './AboutMe/Photo.js';
import {AboutMeCard} from './AboutMe/AboutMeCard.js';
import {StuffIDo} from './AboutMe/StuffIDo.js';

export class AboutMe extends React.Component {
  render () {
    return (
      <div id='About-Me' className={css(styles.wrapper)}>
        <StarField noOfStars='140' />
        {/* <MediaBar /> */}
        <div className={css(styles.inline)}>
          <Photo />
          <AboutMeCard />
        </div>
        <StuffIDo />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    paddingTop: '70px',

    display: 'flex',
    overflowY: 'visible',
    overflowX: 'hidden',
    '@media (max-width: 877px)': {
      paddingTop: '120px'
    }
  },

  inline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
