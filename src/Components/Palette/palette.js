import React, { Component } from 'react';
import Form from '../Form/Form';
// import Nav from '../Nav/Nav';
import Colors from '../Colors/Colors';
import '../Palette/Palette.scss';
import { Link } from 'react-router-dom';
import { postPalette, getPalettes } from '../../apiCalls';
import '../Nav/Nav.scss'

export class Palette extends Component {
  constructor() {
    super()
    this.state = {
      name: '', 
      palettes: [],
      currentProjectId: 0,
      colors: [
        {name: 'color1', hex: '#818479', isLocked: false},
        {name: 'color2', hex: '#D2E4C4', isLocked: false},
        {name: 'color3', hex: '#E4E9B2', isLocked: false},
        {name: 'color4', hex: '#E7E08B', isLocked: false},
        {name: 'color5', hex: '#B5CBB7', isLocked: false},
      ],
      error: '',
    }
  }

  async componentDidMount() {
    await this.getAllPalettes()
  }

  getAllPalettes = async () => {
    try {
      const palettes = await getPalettes();
      const thesePalettes = palettes.filter(palette => palette.project_id === parseInt(this.props.id));
      this.setState({ palettes: thesePalettes })
      const id = parseInt(this.props.id)
      this.setState({ currentProjectId: id })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  generateRandomColor = () => {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
  }

  generateColor = () => {
    const newColors = [];
    this.state.colors.forEach(color => {
      if(!color.isLocked) {
        let col = {...color};
        col.hex = this.generateRandomColor();
        newColors.push(col);
      } else {
        newColors.push(color);
      }
    });
    this.setState({ colors: newColors });
  }

  lockColor = (colorNum) => {
    const newColors = [];
    this.state.colors.forEach(color => {
      if(color.name === `color${colorNum}`) {
        let col = {...color};
        col.isLocked = !col.isLocked;
        newColors.push(col);
      } else {
        newColors.push(color);
      }
    });
  
    this.setState({ colors: newColors })
  }

  savePalette = () => {
    postPalette(this.state.colors[0].hex, 
      this.state.colors[1].hex, 
      this.state.colors[2].hex, 
      this.state.colors[3].hex, 
      this.state.colors[4].hex, 
      this.state.currentProjectId, 
      this.state.name)
    this.setState({ name: ''})
  }


  render() {
    const {handleInfo, currentProject} = this.props
    return(
        <section className="palette-page">
          <Link to="/">
            <h1 className="title">Palette Picker</h1>
          </Link>
      <section className="nav-page">
      <Link to={`/palettes/${this.state.currentProjectId}`} > 
        <button onClick={() => handleInfo(this.state.palettes)} onMouseEnter={this.getAllPalettes} className="nav__button--show">Show Palettes</button>
      </Link>
      <div className="nav__div--gen">
        <h1 className="nav__name">{currentProject.toUpperCase()}</h1>
        <button onClick={this.generateColor} className="nav__button--generate">Generate</button>
      </div>
      <Form props={this.props} handleNameChange={this.handleNameChange} savePalette={this.savePalette}/>
     </section>
      <Colors 
        copyHex={this.copyHex}
        lockColor={this.lockColor}
        color1={this.state.colors[0]}
        color2={this.state.colors[1]}
        color3={this.state.colors[2]}
        color4={this.state.colors[3]}
        color5={this.state.colors[4]}/>
      </section>
    )
  }
}

export default Palette