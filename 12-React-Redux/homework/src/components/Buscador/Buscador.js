import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovie, getMovieDetail, addMovieFavorite } from "../../actions";


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovie(this.state.title)
  }

  handleClick(movie){
    this.props.addMovieFavorite(movie)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {
          this.props.movies.map(movie => {
            return(
              <li>
                <Link to={`/movie/${movie.imdbID}`}>
                  <span>{movie.Title}</span>
                </Link>
                <button onClick={() => this.handleClick({
                  id: movie.imdbID, Title: movie.Title
                })} >♥️</button>
              </li>
            )
          })
         }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => { // selecciona del estado global, la prop que necesita
  return{
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => { // despacha las acciones que necesita el componente
  return{
    getMovie: titulo => dispatch(getMovie(titulo)),
    movieDetail: id => dispatch(getMovieDetail(id)),
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
