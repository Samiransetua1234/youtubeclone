import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  
  params: {
    maxResults: '48'
  },
  headers: {
    'X-RapidAPI-Key':'1804959916msh63760640aaad6efp104907jsn8a1d4610847a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}

