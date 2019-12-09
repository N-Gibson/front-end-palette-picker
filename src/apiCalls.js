export const getProjects = async () => {
  const response = await fetch('https://pp-be.herokuapp.com/api/v1/projects');
  if(!response.ok) {
    throw new Error('There was an error loading projects')
  }
  const data = await response.json();
  return data
}

export const postProject = async (projectName) => {
  const url = 'https://pp-be.herokuapp.com/api/v1/projects';
  const body = {
    name: projectName,
  };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };

  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error('There was an error adding a project.')
    }
    const project = await response.json();
    return project
  } catch (error) {
    throw new Error(error)
  };
};

export const patchProject = async (id, projectName) => {
  const url = `https://pp-be.herokuapp.com/api/v1/projects/${id}`;
  const body = {
    name: projectName
  };
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error(`Error updating project: ${id}'s name to ${projectName}`)
    }
    const patchedProject = await response.json();
    return patchedProject
  } catch (error) {
    throw new Error(error)
  };
};

export const deleteProject = async (id) => {
  const url = `https://pp-be.herokuapp.com/api/v1/projects/${id}`;
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error(`Error deleting project with id: ${id}`);
    }
    const deletedProject = await response.json();
    return deletedProject
  } catch (error) {
    throw new Error(error)
  };
};