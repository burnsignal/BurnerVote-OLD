import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';
import {TextButton} from '../UI/TextButton.js';
import {StyledImage} from './StyledImage.js';

/**
 * accepts a prop called data which is a json with:
 * src (image array)
 * title
 * technologies
 * bodyText
 * gitLink (optional)
 * demoLink (optional)
 */

export class ProjectCard extends React.Component {
  render () {
    var data = this.props.data;

    var bodyText = []
    const text = data.bodyText.split('\n');
    for (var i=0; i<text.length; i++) {
      bodyText.push(<p className={css(styles.bodyText)} key={Math.random()} >{text[i]}</p>)
    }

    function StyledImages (props) {
      return (
        <StyledImage src={props.src} href={props.href} />
      );
    }

    function GitButton (props) {
      if (!props.gitLink) {
        return null;
      }
      return (
        <TextButton text='Git' href={props.gitLink} color='#fff' hoverColor='#ffd377' />
      );
    }

    function DemoButton (props) {
      if (!props.demoLink) {
        return null;
      }
      return (
        <TextButton text='Live Demo' style={{margin: '0px 20px 0px 20px'}} href={props.demoLink} color='#fff' hoverColor='#ffd377' />
      );
    }

    return (
      <MaterialCard className={styles.card} >
        <StyledImages src={data.src} />
        <div className={css(styles.textWrapper)}>
          <div className={css(styles.title)}>{data.title}</div>
          <div className={css(styles.technologies)}>{data.technologies}</div>
          {bodyText}
          <div className={css(styles.buttonWrapper)}>
            <GitButton gitLink={data.gitLink} />
            <DemoButton demoLink={data.demoLink} />
          </div>
        </div>
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 'auto',
    margin: '0px 20px 20px 20px',
    overflow: 'auto',
    flexDirection: 'row',
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    padding: '40px',
    alignItems:'center',
    justifyContent: 'center',
    color: '#fff'
  },

  imgWrapper: {
    display: 'flex',
  },

  textWrapper: {
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    // padding: '30px'
  },

  title: {
    // marginTop: '50px',
    fontSize: '40px',
    fontWeight: '900'
  },

  technologies: {
    fontSize: '20px',
    marginBottom: '0px'
  },

  p: {
    fontSize: '20px',
    marginLeft: '50px',
    marginRight: '50px',
    marginBottom: '0px'
  },

  buttonWrapper: {
    paddingTop: '30px',
    // height: '100px',
    display: 'flex',
    flexDirection: 'row',
    // flexGrow: '1',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexWrap: 'wrap',
  }
});
