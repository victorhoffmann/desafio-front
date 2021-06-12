
import axios from 'axios'

const api_key = 'f589bf9c6fdbd172e547adc7e2146a18'
const base_url = 'https://api.themoviedb.org/3'
const url_filme = `${base_url}/movie`


export const filme_id = async (id) => {
    try {
        const {data} = await axios.get(`${url_filme}/${id}`, {
            params: {
                api_key,
                language: 'pt-BR'
            }
        });
        return data
    } catch (error) {
        
    }
}

export const video_filme_id = async (id) => {
    try {
        const { data } = await axios.get(`${url_filme}/${id}/videos`, {
            params: {
                api_key,
                language: 'pt-BR'
            }});
            return data['results'][0].key

    } catch (error) {
        
    }
}