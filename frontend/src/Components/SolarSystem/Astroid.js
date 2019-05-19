import React from 'react';

//requires a source, animation duration, orbitradius, size

export class Astroid extends React.Component {
  render () {

    var innerR = parseInt(this.props.innerR, 10) + 20;
    var outerR = parseInt(this.props.outerR, 10) - 10;
    var radius = innerR + Math.random() * (outerR - innerR);
    var angle = Math.random() * 2 * Math.PI;

    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    var size = Math.random() * 3 + 1;
    var opacity = Math.random()*0.7 + 0.3;

    const AstroidStyle = {
      transform: 'translate(' + x + 'px, ' + y + 'px)',
      position: 'absolute',
      height: size + 'px',
      width: size + 'px',
      backgroundColor: 'rgba(105, 105, 105, ' + opacity + ')',
      borderRadius: size + 'px',
    };

    return (
      <div style ={AstroidStyle}>
      </div>
    );
  }
}