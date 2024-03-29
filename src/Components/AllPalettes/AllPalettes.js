import React from 'react';
import './AllPalettes.scss';
import {Link} from 'react-router-dom'

const AllPalettes = (props) => {
  const {removePalette} = props
  const palettes = props.palettes.map(palette => {
    return(
      <div className='outer-color-container' key={palette.id}>
        <h3 className='all-palette-name'>{palette.name}</h3>
        <div className='inner-color-container'>
          <div  id='col-first'  className='all-palettes-colors' style={{backgroundColor: palette.color1}}>
            {palette.color1}
          </div>
          <div className='all-palettes-colors' style={{backgroundColor: palette.color2}}>
            {palette.color2}
          </div>
          <div className='all-palettes-colors' style={{backgroundColor: palette.color3}}>
            {palette.color3}
          </div>
          <div className='all-palettes-colors' style={{backgroundColor: palette.color4}}>
            {palette.color4}
          </div>
          <div id='col-last' className='all-palettes-colors' style={{backgroundColor: palette.color5}}>
            {palette.color5}
          </div>
        </div>
          <button className='delete-palette' onClick={() => removePalette(palette.id, palette.project_id)}>Delete</button>
      </div>
    )
  })
  return (
    <div className='all__palettes-div'>
      <Link to="/">
        <h1 className="title">Palette Picker</h1>
      </Link>
      {palettes}
    </div>
  )
}

export default AllPalettes;