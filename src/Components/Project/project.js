import React from 'react';
import { deleteProject } from '../../apiCalls';
import { Link } from 'react-router-dom';
import './project.scss';

const Project = (props) => {
  const { changeName } = props;
  return (
    <section className='project' id={`project_${props.id}`}>
      <textarea name='revisedName' onChange={changeName}>{props.name}</textarea>
      <Link to={`/palettes/${props.id}`}>
        <button>Show</button>
      </Link>
      <button 
        type='button' 
        onClick={() => {
          deleteProject(props.id);
        }
      }>Delete</button>
    </section>
  )
}

export default Project;
