import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {StarField} from './SolarSystem/StarField.js';
import {MaterialCard} from './UI/MaterialCard.js';
import {ProjectCategory} from './Projects/ProjectCategory.js';

export class Projects extends React.Component {
  render () {
    var projectCategoriesList=[];
    for (const key of Object.keys(projectCategoriesJson)) {
      projectCategoriesList.push(<ProjectCategory key={Math.random()} title={key} data={projectCategoriesJson[key]} />);
    }

    return (
      <div id='Projects' className={css(styles.wrapper)}>
        <StarField noOfStars='140' />
        <MaterialCard className={styles.card}>
          <div className={css(styles.header)}>Projects</div>
        </MaterialCard>
        {projectCategoriesList}
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
  card: {
    margin: '20px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '300px'
  },

  header: {
    fontSize: '50px'
  }
});

// map of titles to project categories data
const projectCategoriesJson = {
  "Full Stack": [
    {
      src: 'Assets/Img/Projects/Athena.png',
      title: 'Athena Home AI',
      technologies: 'Python, Flask, Google NLP, API.ai, Android Studio',
      bodyText: 'My take on Tony Stark’s (Iron Man movies) Jarvis. \n The Athena system is broken down into a central Flask server that responds to requests made through a RESTful API sent from a bunch of clients I wrote. I’ve built mobile, desktop and smartwatch clients for the system.\nThe Athena system handles my lights, calender, timers, calls and monitors my vitals and other smartwatch accessible health stats.',
      gitLink: 'https://github.com/Jspsun/Athena2.0',
    },
    {
      src: 'Assets/Img/Projects/WealthsimpleWear.png',
      title: 'Wealthsimple API & Watchface',
      technologies: 'Java, Python, Flask, Selenium, Android Studio, Heroku',
      bodyText: 'I used webscraping and test automation to create a makeshift api to grab details from my Wealthsimple portfolio like my portfolio balance. I built it into a Flask server and deployed it as a RESTful API on Heroku. \n After that, I built Wealthsimple support into my voice bot as well as created an Android watchface that displays my live portfolio balance.',
      gitLink: 'https://github.com/Jspsun/WealthsimpleWear',
    }
  ],
  "Web": [
    {
      src: 'Assets/Img/Projects/InternetThoughts.png',
      title: 'Internet Thoughts',
      technologies: 'JavaScript, CSS, HTML, Node.JS, Heroku',
      bodyText: 'Have you ever wondered what the internet things about something? We had that question so at YaleHacks we put together a site that lets you enter in any topic. We grab the top tweets, Reddit posts and Tumblr posts on that topic and run our in-house sentiment analysis engine on it. We take the data output and turn it into nice easy to understand graphs! ',
      gitLink: 'https://github.com/Jspsun/WhatDoesTheInternetThink',
      demoLink: 'http://internetthoughts.net/'
    },
    {
      src: 'Assets/Img/Projects/EvoSim.png',
      title: 'Evolution Simulator',
      technologies: 'JavaScript, P5.js, Heroku',
      bodyText: 'Took a bit of time to create a mini simulation to play around with super simple genetic algorithms. \n I simulate a tonne of ’creatures’ with different feeding abilities. The smart ones avoid poison and are uniquely suited to gather food. Rinse and repeat at super fast speeds and you can visually see a bunch of creatures evolve!',
      gitLink: 'https://github.com/Jspsun/EvolutionSimulator',
      demoLink: 'https://evolutionsimulator.herokuapp.com/'
    },
    {
      src: 'Assets/Img/Projects/QuakeMap.png',
      title: 'Earthquake Map',
      technologies: 'JavaScript, P5.js, Firebase, TensorFlow',
      bodyText: 'I tried a little experiment where I visually plotted earthquakes around the world based on magnitude and location. \n After that, I tried storing them to a database and later tried my hand at a prediction algorithm using TensorFlow. By the end, I had built a tool to not only map past Earthquakes, but also map future ones!',
      gitLink: 'https://github.com/Jspsun/QuakeMap',
      demoLink: 'https://visualquakemap.herokuapp.com/'
    },
    {
      src: 'Assets/Img/Projects/EmployHer.png',
      title: 'EmployHer',
      technologies: 'JavaScript, HTML, CSS, Firebase, Twilio API',
      bodyText: 'At <\\Br/eak>Inequality 2016 we were challenged to create a project that could make an impact in the lives of Bangladeshi women. The challenge was to do it given that users only had access to sms-enabled phones (no internet). \n We came up with a job matching service that lets Women get matched to empowering work opportunities via sms. We created a sms-connected database, sms server as well as a website for employers to find their perfect employee.',
      gitLink: 'https://github.com/Jspsun/employHer.git'
    }
  ],
  "Backend": [
    {
      src: 'Assets/Img/Projects/MarkovMessanger.png',
      title: 'Markov-Messanger Bot',
      technologies: 'Python, Flask, Node.JS, JavaScript, React Native',
      bodyText: 'At EngHack 2017 we created a Facebook autoresponder. \n Most voice bots dont sound or speak like you. In order to do that, we wrote a script to scrape your chat history with someone and train a markov model using that data. After that we set up a server to autorespond to messages and included features like sentiment analysis to determine what types of emojis to send. \n We built the architecture around Node and Flask microservices and also created a React Native app to remotely toggle the bot.',
      gitLink: 'https://github.com/Jspsun/markov-messenger-bot'
    }
  ],
}


