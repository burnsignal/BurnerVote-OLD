import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Astroid} from './Astroid.js';

//requires a source, animation duration, orbitradius, size

export class AstroidBelt extends React.Component {
  render () {

    const astroidStyle = {
      animationDuration: this.props.duration + 's',
      width: parseInt(this.props.outerR * 2, 10) +'px',
      height: parseInt(this.props.outerR * 2, 10) +'px'
    };

    var astroids = [];
    for (var i = 0; i< this.props.noOfAstroids; i++) {
      astroids.push(<Astroid innerR= {this.props.innerR} outerR={this.props.outerR}  key={Math.random()}/>);
    }

    return (
        <div className = {css(styles.AstroidBelt)} style={astroidStyle}>
          {astroids}
        </div>
    );
  }
}
const rotateKeyframes =  { 
  '100%': { 
    transform: 'rotate(-360deg)' 
  }
};

const styles = StyleSheet.create({

  AstroidBelt: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    animationName: [rotateKeyframes],
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    transformOrigin: 'center'
  }
});


