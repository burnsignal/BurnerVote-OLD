import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export class MaterialCard extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '4px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    color: '#fff'
  }
});
