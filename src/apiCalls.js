
export const getPalettes = async () => {
  const response = await fetch('https://pp-be.herokuapp.com/api/v1/palettes');
  if(!response.ok) {
    throw new Error('There was an error loading palettes')
  }
  const data = await response.json();
  return data
};

export const getPalette = async (id) => {
  const response = await fetch(`https://pp-be.herokuapp.com/api/v1/palettes/${id}`);
  if(!response.ok) {
    throw new Error(`There was an error loading the palette with id: ${id}`)
  }
  const data = await response.json();
  return data;
}

export const postPalette = async (color1, color2, color3, color4, color5, projectId, paletteName) => {
  console.log(color1, color2, color3, color4, color5, projectId, paletteName)
  const url = 'https://pp-be.herokuapp.com/api/v1/palettes/'
  const body = {
    name: paletteName,
    project_id: projectId,
    color1: color1,
    color2: color2,
    color3: color3,
    color4: color4,
    color5: color5,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error('There was an error adding this palette');
    }
    const newPalette = await res.json();
    return newPalette;
  } catch (error) {
    throw new Error(error);
  }
};

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

