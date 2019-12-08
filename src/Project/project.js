import React from 'react';
import './project.scss';

const Project = (props) => {
  return (
    <section className='project' id={`project_${props.id}`}>
      <h2>{props.name}</h2>
    </section>
  )
}

export default Project;