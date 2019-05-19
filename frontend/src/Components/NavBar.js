import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {ImageButton} from './UI/ImageButton.js';

var smoothScroll = require('smoothscroll');

var lastKnownScrollPosition = 0;
var ticking = false;
var self;

export class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      backgroundColor: 'rgba(22, 31, 44, 0)',
      shadow: ''
    };

    self = this;
    window.addEventListener('scroll', function (e) {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          handleScroll(lastKnownScrollPosition);
          ticking = false;
        });
      }
      ticking = true;
    });

    function handleScroll (lastScroll) {
      var toOpacity = 100;
      if (lastScroll === 0) {
        self.setState({
          backgroundColor: 'rgba(22, 31, 44, 0)',
          shadow: '0 3px 6px rgba(0,0,0,0), 0 3px 6px rgba(0,0,0,0)'
        });
      } else if (lastScroll < toOpacity) {
        var fraction = lastScroll / toOpacity;
        self.setState({
          backgroundColor: 'rgba(22, 31, 44, ' + fraction + ')',
          shadow: '0 3px 6px rgba(0,0,0,' + 0.16 * fraction + '), 0 3px 6px rgba(0,0,0,' + fraction * 0.23 + ')'
        });
      } else {
        self.setState({
          backgroundColor: 'rgba(22, 31, 44, 0.99)',
          shadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        });
      }
    }
  }

  render () {
    function scroll (element) {
      var el = document.querySelector(element);
      if (el) {
        smoothScroll(el);
      }
    }
    return (
      <div className={css(styles.wrapper) + ' animated slideInDown'} style={{backgroundColor: this.state.backgroundColor, boxShadow: this.state.shadow}}>
        <div className={css(styles.titleWrapper)}>
          <ImageButton link='https://github.com/Jspsun' width='40px' height='40px' src='Assets/Img/NavBar/github-logo.svg' />
          <div className={css(styles.titleText)}>
            Jonathan.Solar
          </div>
        </div>

        <div className={css(styles.navigationWrapper)}>
          <div className={css(styles.navigationItem)} onClick={() => scroll('#About-Me')} >About Me</div>
          <div className={css(styles.navigationItem)} onClick={() => scroll('#Projects')}>Projects</div>
          {/* <div className={css(styles.navigationItem)} onClick={() => scroll('#Contact')}>Contact</div> */}
          <a href='https://medium.com/@jspsun' target='_blank' className={css(styles.navigationItem)} rel='noopener noreferrer'><div>Blog</div></a>
          {/* <a href='./JonathanSunResume.pdf' target='_blank' className={css(styles.navigationItem)}><div>Resume</div></a> */}
        </div>

      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',

    // margin: '10px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    color: '#fff',
    position: 'fixed',
    flexWrap: 'wrap',
    flexGrow: 1,
    padding: '15px',
    zIndex: 2,
    '@media (max-width: 877px)': {
      justifyContent: 'center',
      width: 'auto'
    }
  },

  titleWrapper: {
    fontSize: '40px',
    alignItems: 'center',
    display: 'flex',

    '@media (max-width: 877px)': {
      // display: 'block',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  image: {
    display: 'inline'
  },

  titleText: {
    marginLeft: '10px',
    display: 'inline'
  },

  navigationWrapper: {
    display: 'flex',
    marginLeft: 'auto',
    textAlign: 'center',
    paddingRight: '20px',
    paddingLeft: '20px',

    '@media (max-width: 877px)': {
      display: 'block',
      float: 'none',
      // marginTop: '20px',
      marginLeft: '0px'
    }
  },

  navigationItem: {
    textDecoration: 'none',
    color: '#fff',
    display: 'inline-block',
    marginRight: '25px',
    marginLeft: '25px',
    transition: 'color 0.5s ease',

    '@media (max-width: 877px)': {
      marginBottom: '5px',
      marginTop: '5px'
    },
    ':hover': {
      color: '#ffd377',
      cursor: 'pointer'
    }
  }
});
