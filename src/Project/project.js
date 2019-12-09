import React from 'react';
import { deleteProject } from '../apiCalls';
import { Link } from 'react-router-dom';
import './project.scss';

const Project = (props) => {
  return (
    // <Link to={`/project/${props.id}`}>
    <section className='project' id={`project_${props.id}`}>
      <textarea>{props.name}</textarea>
      <button 
        type='button' 
        onClick={() => {
          deleteProject(props.id);
        }
      }>Delete</button>
    </section>
    // </Link>
  )
}

export default Project;