import React from 'react';
import './AllPalettes.scss';

const AllPalettes = (props) => {
  console.log('props in pallettes', props)
  const palettes = props.palettes.map(palette => {
    return(
      <div>
        <h3>{palette.name}</h3>
        <div style={{backgroundColor: palette.color1}}>{palette.color1}</div>
        <div style={{backgroundColor: palette.color2}}>{palette.color2}</div>
        <div style={{backgroundColor: palette.color3}}>{palette.color3}</div>
        <div style={{backgroundColor: palette.color4}}>{palette.color4}</div>
        <div style={{backgroundColor: palette.color5}}>{palette.color5}</div>
      </div>
    )
  })
  return (
    <div>
      {palettes}
    </div>
  )
}

export default AllPalettes;