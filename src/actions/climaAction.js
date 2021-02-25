import axios from "axios";

const BUSCAR = "BUSCAR";

const busqueda = (data) => {
    type: BUSCAR,
    data
}

export const busquedaAsc = (nombre) = dispatch => {

    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: 'London,uk',
          lat: '0',
          lon: '0',
          callback: 'test',
          id: '2172797',
          lang: 'null',
          units: '"metric" or "imperial"',
          mode: 'xml, html'
        },
        headers: {
          'x-rapidapi-key': '4d66391c72mshfc3770f69fd2a43p10f2b0jsn94224f6e30a9',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
      };

    axios.request(options).then(res => dispatch(busqueda(res.data)))
}