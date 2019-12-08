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