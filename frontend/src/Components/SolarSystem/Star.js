import React from 'react';

//requires a source, animation duration, orbitradius, size

export class Star extends React.Component {
  render () {

    var x = Math.random() * 100;
    var y = Math.random() * 100;
    var size = Math.random() * 3;
    var opacity = Math.random();

    const starStyle = {
      top: y + '%',
      left: x + '%',
      position: 'absolute',
      height: size + 'px',
      width: size + 'px',
      backgroundColor: 'rgba(255, 255, 255, ' + opacity + ')',
      borderRadius: size + 'px'
    };

    return (
      <div style ={starStyle}>
      </div>
    );
  }
}