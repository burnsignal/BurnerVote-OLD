import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Star} from './Star.js';

//requires a source, animation duration, orbitradius, size

export class StarField extends React.Component {
  render () {

    var stars = [];
    for (var i = 0; i< this.props.noOfStars; i++) {
      stars.push(<Star key={Math.random()}/>);
    }

    return (
      <div className = {css(styles.StarField)}>
        {stars}
      </div>
    );
  }
}

const styles = StyleSheet.create({

  StarField: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'flex-start',
    zIndex: '-2',

    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1'
  }
});
