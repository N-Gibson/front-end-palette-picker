import React from 'react';
import { deleteProject } from '../apiCalls';
import './project.scss';

const Project = (props) => {
  return (
    <section className='project' id={`project_${props.id}`}>
      <h2>{props.name}</h2>
      <button type='button' onClick={
        // this is where the delete endpoint will need to go
        () => {
          deleteProject(props.id);
        }
      }>Delete</button>
    </section>
  )
}

export default Project;