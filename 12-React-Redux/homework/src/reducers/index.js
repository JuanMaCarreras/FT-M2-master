import { 
    GET_MOVIE,
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE,
    MOVIE_DETAIL,
    CLEAN_DETAIL
} from "../actions/action-types"

const initialState = {
    movies: [],
    moviesFavorites: [],
    movieDetail: {}
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_MOVIE:
            return{
                ...state,
                movies: action.payload.Search
            }

        case MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: action.payload
            }
        
        case ADD_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavorites: [...state.moviesFavorites, action.payload]
            }

        case REMOVE_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavorites: state.moviesFavorites.filter(
                    (movie) => movie.id !== action.payload 
                )
            }

        case CLEAN_DETAIL:
            return{
                ...state,
                movieDetail: {}
            }

        default:
            return {...state}
    }
}