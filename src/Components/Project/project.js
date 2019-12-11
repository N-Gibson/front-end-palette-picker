import React from 'react';
import { deleteProject } from '../../apiCalls';
import { Link } from 'react-router-dom';
import './project.scss';

const Project = (props) => {
  const { handleProject } = props;
  return (
    <section className='project' id={`project_${props.id}`}>
      <h3 name='revisedName'>{props.name}</h3>
      <Link to={`/project/${props.id}` }>
        <button className="project__button" onClick={() => handleProject(props.name)}>Show</button>
      </Link>
      <button 
        className="project__button"
        type='button' 
        onClick={() => {
          deleteProject(props.id);
        }
      }>Delete</button>
    </section>
  )
}

export default Project;
