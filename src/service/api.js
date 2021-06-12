
import axios from 'axios'

const api_key = 'f589bf9c6fdbd172e547adc7e2146a18'
const language = 'pt-BR'
const base_url = 'https://api.themoviedb.org/3'
const url_filme = `${base_url}/movie`
const search = `${base_url}/search/movie/`
const filmes_carousel = `${url_filme}/now_playing`


export const filme_id = async (id) => {
    try {
        const {data} = await axios.get(`${url_filme}/${id}`, {
            params: {
                api_key,
                language
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
                language
            }});
            return data['results'][0].key

    } catch (error) {
        
    }
}

export const filmes_search = async (busca) => {
    try {
        const { data } = await axios.get(`${search}`, {
            params: {
                api_key,
                language,
                query: `${busca}`,
                page: 1,
                inclue_adult: false
            }});
            return data['results']
    } catch (error) {
        
    }
}

export const carousel_home = async () => {
    try {
        const { data } = await axios.get(`${filmes_carousel}`, {
            params: {
                api_key,
                language,
                page: 1
            }});
            return data['results']
    } catch (error) {
        
    }
}