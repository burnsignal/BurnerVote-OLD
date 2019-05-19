import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {ProjectCard} from './ProjectCard.js';

var self;
/**
 * accepts an array of project data jsons
 * accepts a title
 */
export class ProjectCategory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded: false,
      display: 'none'
    };
    self=this
  }

  render () {
    function toggleState() {
      if (self.state.expanded === false){
        self.state.expanded = true;
        self.setState({display: 'flex'})
      }
      else {
        self.state.expanded = false;
        self.setState({display: 'none'})
      }
    }

    var projects = [];
    var data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      projects.push(<ProjectCard key={Math.random()} className={{display: this.state.display}} data={data[i]} />);
    }

    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.titleWrapper)}>
          {/* <i className={css(styles.expandButton) + " material-icons"} onClick={toggleState}> keyboard_arrow_down</i> */}
          <div className={css(styles.title)}>{this.props.title}</div>
        </div>
        {projects}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    // height: 'auto',
    flexDirection: 'column',
    paddingTop: '80px',

    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    overflowY: 'visible',
    overflowX: 'hidden',
    '@media (max-width: 877px)': {
      paddingTop: '130px'
    }
  },
  titleWrapper: {
    backgroundColor: 'rgba(22, 31, 44, 0.99)',
    color: '#fff',
    width: '80%',
    padding: '20px 40px 20px 40px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    flexDirection: 'row',
    display: 'flex',
    alignItems:'center',
    transform: 'translateY(5px)'
  },
  title: {
    fontSize: '50px',
    fontWeight: 'bold'
  },
  expandButton: {
    lineHeight: '0.5',
    color: '#fff',
    transition: 'all 0.5s ease',
    fontSize: '80px',
    ':hover': {
      color: '#ffd377',
      cursor: 'pointer'
    }
  }
});
