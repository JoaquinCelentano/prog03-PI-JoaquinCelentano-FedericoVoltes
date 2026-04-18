import React, { Component } from "react";
import Cookies from "universal-cookie";
import MovieCard from "../../components/MovieCard/MovieCard";

const cookies = new Cookies();

class Favorites extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      series: []
    };
  }

  componentDidMount() {
    if (!cookies.get("userLogged")) {
      this.props.history.push("/login");
      return;
    }
    let favoritosStorage = localStorage.getItem("favoritos");
    if (favoritosStorage === null) return;
    let favoritosParseado = JSON.parse(favoritosStorage);
    this.setState({ movies: favoritosParseado.movies, series: favoritosParseado.series });
  }

  render() {
    return (
      <div className="container">
        <h2 className="alert alert-primary">Películas favoritas</h2>
        { this.state.movies.length === 0 ? <p>No tenés películas favoritas</p> : (
          <section className="row cards">
            { this.state.movies.map((movie, i) => <MovieCard key={movie.id + i} data={movie} tipo="movie" />) }
          </section>
        ) }
        <h2 className="alert alert-warning">Series favoritas</h2>
        { this.state.series.length === 0 ? <p>No tenés series favoritas</p> : (
          <section className="row cards">
            { this.state.series.map((serie, i) => <MovieCard key={serie.id + i} data={serie} tipo="tv" />) }
          </section>
        ) }
      </div>
    );
  }
}

export default Favorites;