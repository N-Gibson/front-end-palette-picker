export const getProjects = async () => {
  const response = await fetch('https://pp-be.herokuapp.com/api/v1/projects');
  if(!response.ok) {
    throw new Error('There was an error loading projects')
  }
  const data = await response.json();
  return data
}

export const getPalettes = async () => {
  const response = await fetch('https://pp-be.herokuapp.com/api/vi/palettes');
  if(!response.ok) {
    throw new Error('There was an error loading palettes')
  }
  const data = await response.json();
  return data
}

