import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// requires a source, animation duration, orbitradius, size

export class Planet extends React.Component {
  render () {
    const planetRadius = parseInt(this.props.size, 10);
    const orbitRadius = parseInt(this.props.orbitRadius, 10);
    const circleTranslate = -1 * (orbitRadius * 2 + planetRadius / 2) / 2;

    const style = StyleSheet.create({
      planetStyle: {
        width: planetRadius + 'px',
        height: planetRadius + 'px',
        marginLeft: orbitRadius + 'px',
        borderRadius: planetRadius + 'px',
        background: this.props.background
      }
    });

    const orbitStyle = {
      animationDuration: this.props.duration + 's'
    };

    const circleStyle = {
      width: (orbitRadius * 2 + planetRadius / 2) + 'px',
      height: (orbitRadius * 2 + planetRadius / 2) + 'px',
      borderRadius: orbitRadius + 'px',
      transform: 'translate(' + circleTranslate + 'px, ' + circleTranslate + 'px)'
    };

    return (
      <div>
        <div className={css(styles.circle)} style={circleStyle}>
        </div>
        <div className={css(styles.orbit)} style={orbitStyle}>
          <div className={css(styles.planet, style.planetStyle)} style={this.props.style}/><div />
        </div>
      </div>
    );
  }
}
const rotateKeyframes = {
  '100%': {
    transform: 'rotate(-360deg)'
  }
};

const styles = StyleSheet.create({
  planet: {
    position: 'absolute'
  },

  orbit: {
    animationName: [rotateKeyframes],
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },

  circle: {
    position: 'absolute',
    border: '1px solid rgba(102, 166, 229, 0.12)'
  }

});
