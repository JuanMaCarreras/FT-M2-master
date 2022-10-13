import { 
    GET_MOVIE, 
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE,
    MOVIE_DETAIL,
    CLEAN_DETAIL
} from "./action-types";

const apiKey = 'fb51de37';

export const getMovie = (titulo) => {
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(obj => dispatch({type: GET_MOVIE, payload: obj}))
    }
}

export const getMovieDetail = (id) => {
    return function(dispatch){
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(obj => dispatch({type: MOVIE_DETAIL, payload: obj}))
    }
}

export const addMovieFavorite = (movie) => {
    return {type: ADD_MOVIE_FAVORITE, payload: movie}
}

export const removeMovieFavorite = (id) => {
    return {type: REMOVE_MOVIE_FAVORITE, payload: id}
}

export const cleanDetail = () => {
    return {type: CLEAN_DETAIL}
}