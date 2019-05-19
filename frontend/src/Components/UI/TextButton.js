import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export class TextButton extends React.Component {
  render () {
    const styles = StyleSheet.create({
      a: {
        textDecoration: 'none',
        color: this.props.color,
        fontWeight: '500',
      },

      button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '150px',
        height: '50px',

        textDecoration: 'none',
        borderRadius: '4px',
        border: '2px solid',
        color: this.props.color,
        borderColor: this.props.color,
        transition: 'all 0.5s ease',

        ':hover': {
          color: this.props.hoverColor,
          borderColor: this.props.hoverColor
        }
      },
      text: {
        fontWeight: '500'
      }
    });

    return (
      <a className={css(styles.a)} style={this.props.style} href={this.props.href} target='__blank'>
        <div className={css(styles.button, this.props.className)}>
          <div className={css(styles.text)}>{this.props.text}</div>
        </div>
      </a>
    );
  }
}
