import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export class ImageButton extends React.Component {
  render () {
    const styles = StyleSheet.create({
      icon: {
        width: this.props.width,
        height: this.props.height
      }
    });

    return (
      <a href={this.props.link} target='__blank'>
        <img src={this.props.src} className={css(styles.icon)} alt='Button' />
      </a>
    );
  }
}
