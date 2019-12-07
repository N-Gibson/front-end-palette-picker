import React, { Component } from 'react';
import '../Colors/Colors.scss';
import lockIcon from '../../images/locked-icon.png'

export const Colors = (props) => {
  const {color1, color2, color3, color4, color5, lockColor} = props;

  const lockedStyle = {
    opacity: 1
  }

  return(
    <section className="colors-page">
      <div className="color div__color--1" style={{backgroundColor: color1.hex}}>
      {!color1.isLocked && <img src={lockIcon} onClick={() => lockColor( 'color1' )}/>}
      {color1.isLocked  && <img style={lockedStyle} src={lockIcon} onClick={() => lockColor( 'color1' )}/>}
      {color1.hex}
      </div>
      <div className="color div__color--2" style={{backgroundColor: color2.hex}} >
      {!color2.isLocked && <img src={lockIcon} onClick={lockColor}/>}
      {color2.isLocked  && <img style={lockedStyle} src={lockIcon} onClick={lockColor}/>}
      {color2.hex}
      </div>
        <div className="color div__color--3" style={{backgroundColor: color3.hex}}>
        <img src={lockIcon}/>
        {color3.hex}
        </div>
        <div className="color div__color--4" style={{backgroundColor: color4.hex}}>
        <img src={lockIcon}/>
        {color4.hex}
        </div>
        <div className="color div__color5" style={{backgroundColor: color5.hex}}>
        <img src={lockIcon}/>
        {color4.hex}
        </div>
    </section>
  )
}

export default Colors