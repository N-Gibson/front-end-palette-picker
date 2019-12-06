export const getProjects = async () => {
  console.log('using the right url', 'https://pp-be.herokuapp.com/api/v1/projects')
  const response = await fetch('https://pp-be.herokuapp.com/api/v1/projects');
  if(!response.ok) {
    throw new Error('There was an error loading projects')
  }
  const data = await response.json();
  return data
}