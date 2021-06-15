
import axios from 'axios'

const api_key = 'f589bf9c6fdbd172e547adc7e2146a18'
const language = 'pt-BR'
const base_url = 'https://api.themoviedb.org/3'
const url_filme = `${base_url}/movie`
const search = `${base_url}/search/movie/`
const filmes_carousel = `${base_url}/movie/now_playing`
const generos = `${base_url}/genre/movie/list`
const descobrir_filmes = `${base_url}/discover/movie`
const melhores_filmes = `${base_url}/movie/top_rated`


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

            const image_filmes = 'http://image.tmdb.org/t/p/original/'
            const tratados = data['results'].map((filme) => ({
                id: filme['id'],
                title: filme['title'],
                foto: image_filmes + filme['poster_path'],
                nota: filme['vote_average'],
                genero: filme['genre_ids']
            }))
            return tratados
    } catch (error) {
        
    }
}

export const dados_generos = async () => {
    try {
        const { data } = await axios.get(generos, {
            params: {
                api_key,
                language,
                page: 1
            }
        })
        const tratados = data['genres'].map((genero) => ({
            id: genero['id'],
            name: genero['name']
        }))
        return tratados
    } catch (error) {
        
    }
}

export const filmes_genero = async (genero_id) => {
    try {
        const { data } = await axios.get(descobrir_filmes, {
            params: {
                api_key,
                language,
                page: 1,
                with_genres: genero_id
            }
        })
        const image_filmes = 'http://image.tmdb.org/t/p/original/'
        const tratados = data['results'].map((filme) => ({
            id: filme['id'],
            title: filme['title'],
            genero: filme['genre_ids'],
            nota: filme['vote_average'],
            descricao: filme['overview'],
            foto: image_filmes + filme['poster_path']
        }))
        return tratados

    } catch (error) {
        
    }
}

export const top_filmes = async () => {
    try {
        const { data } = await axios.get(melhores_filmes, {
            params: {
                api_key,
                language,
                page: 1
            }
        })
        const image_filmes = 'http://image.tmdb.org/t/p/original/'
        const tratados = data['results'].map((filme) => ({
            id: filme['id'],
            title: filme['title'],
            genero: filme['genre_ids'],
            nota: filme['vote_average'],
            descricao: filme['overview'],
            foto: image_filmes + filme['poster_path']
        }))
        return tratados
    } catch (error) {
        
    }
}

export const renderGeneros = (generos) => {
    let names = ''
    generos.map((genero, i) => (
        names+= `${genero.name}, `));
    return names.slice(0,-2)
}