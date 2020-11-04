const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrlr = encodeURI(dir);

    const params = {
        auth: '135341007219075125103x116922',
        locate: `${encodedUrlr}`, //`Stora Torget 1, 582 19 Linkoping`,
        json: '1'
    }

    const resp = await axios.get('https://geocode.xyz', { params });

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}