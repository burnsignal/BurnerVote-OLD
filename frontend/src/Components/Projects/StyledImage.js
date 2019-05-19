import React from 'react';
import { StyleSheet, css } from 'aphrodite';

/**
 * accept img source
 */
export class StyledImage extends React.Component {
  render () {
    return (
      // <a>
        <img className={css(styles.img)} src={this.props.src} alt='demoImage'/>
      // </a>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '400px',
    maxHeight: '400px',
    transform: 'translateY(-20px)', 
    margin: '50px 50px 0px 50px'
  }
});
