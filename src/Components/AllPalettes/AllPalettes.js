import React from 'react';
import './AllPalettes.scss';
import {deletePalette} from '../../apiCalls'

const AllPalettes = (props) => {
  const {removePalette} = props
  const palettes = props.palettes.map(palette => {
    return(
      <div key={palette.id} data-id={palette.id}>
        <h3>{palette.name}</h3>
        <div style={{backgroundColor: palette.color1}}>
          {palette.color1}
        </div>
        <div style={{backgroundColor: palette.color2}}>
          {palette.color2}
        </div>
        <div style={{backgroundColor: palette.color3}}>
          {palette.color3}
        </div>
        <div style={{backgroundColor: palette.color4}}>
          {palette.color4}
        </div>
        <div style={{backgroundColor: palette.color5}}>
          {palette.color5}
        </div>
          <button onClick={() => removePalette(palette.id)}>Delete</button>
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