import { getPalettes, getPalette } from './apiCalls';

describe('Get Palettes', () => {
  const mockResponse = [
    {
      name: 'paletteName1',
      project_id: 1,
      color1: 'color1',
      color2: 'color2',
      color3: 'color3',
      color4: 'color4',
      color5: 'color5',
    },
    {
      name: 'paletteName2',
      project_id: 2,
      color1: 'color1',
      color2: 'color2',
      color3: 'color3',
      color4: 'color4',
      color5: 'color5',
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promise.resolve(mockResponse),
      })
    })
  });

  it('should return all of the palettes if the response is ok' ,() => {
    expect(getPalettes()).resolves().toEqual(mockResponse);
  });

  it('should throw and error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      ok: false
    })

    expect(getPalettes()).rejects().toEqual('There was an error loading the palette')
  });
});

describe('Get palette', () => {
  const mockResponse = {
    name: 'paletteName1',
    project_id: 1,
    color1: 'color1',
    color2: 'color2',
    color3: 'color3',
    color4: 'color4',
    color5: 'color5',
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promise.resolve(mockResponse),
      })
    })
  });

  it('should return a single palette if the response is ok', () => {
    const id = 1;
    expect(getPalette(id)).resolves().toEqual(mockResponse);
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      ok: false
    })

    expect(getPalette()).rejects().toEqual('There was an error loading the palette')
  });
});

describe('Post palette', () => {
  beforeEach(() => {
    const palettes =  [
      {
        name: 'paletteName1',
        project_id: 1,
        color1: 'color1',
        color2: 'color2',
        color3: 'color3',
        color4: 'color4',
        color5: 'color5',
      },
      {
        name: 'paletteName2',
        project_id: 2,
        color1: 'color1',
        color2: 'color2',
        color3: 'color3',
        color4: 'color4',
        color5: 'color5',
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promise.resolve(palettes)
      })
    })
  });

  it('should be called with the correct url and options', () => {
    const url = 'https://pp-be.herokuapp.com/api/v1/palettes/';
    const newPalette = {
      name: 'New palette name',
      project_id: 3,
      color1: 'color1',
      color2: 'color2',
      color3: 'color3',
      color4: 'color4',
      color5: 'color5',
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(newPalette),
      headers: { 'Content-Type': 'application/json' }
    }

    postPalette(newPalette.name, newPalette.project_id, newPalette.color1, newPalette.color2, newPalette.color3, newPalette.color4, newPalette.color5);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return the id if the response is ok', () => {
    const newPalette = {
      name: 'New palette name',
      project_id: 4,
      color1: 'color1',
      color2: 'color2',
      color3: 'color3',
      color4: 'color4',
      color5: 'color5',
    };

    expect(postPalette(newPalette.name, newPalette.project_id, newPalette.color1, newPalette.color2, newPalette.color3, newPalette.color4, newPalette.color5)).resolves.toEqual({id: 4})
  });

});
