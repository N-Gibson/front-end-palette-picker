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

export const postPalette = async (color1, color2, color3, color4, color5, projectId, paletteName) => {
  const url = 'https://pp-be.herokuapp.com/api/v1/palettes/'
  const body = {
    color1: color1,
    color2: color2,
    color3: color3,
    color4: color4,
    color5: color5,
    project_id: projectId,
    name: paletteName
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

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
