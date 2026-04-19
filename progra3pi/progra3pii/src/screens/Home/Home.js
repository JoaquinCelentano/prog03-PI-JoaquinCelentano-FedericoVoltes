import React, { Component } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Filter from "../../components/Filter/Filter";

const apiKey = "5aba41484f01b327ba117f875007574f";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      series: [],
      CargandoPopulares: true,
      CargandoSeries: true

    };
  }

  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ populares: data.results, CargandoPopulares: false });
      })
      .catch(err => console.log(err));

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ series: data.results, CargandoSeries: false });
      })
      .catch(err => console.log(err));
  }

   render() {
    return (
      <div className="container">

        <Filter />

        <h2 className="alert alert-primary">Películas más populares</h2>

        <section className="row cards">

          {this.state.loadingPopulares ? (
            <p className="alert alert-info">Cargando...</p>
          ) : (
            this.state.populares.map((movie, i) => {
              if (i < 4) {
                return <MovieCard key={movie.id} data={movie} tipo="movie" />
              }
              return null;
            })
          )}

        </section>

        <a href="/movies" className="btn btn-outline-primary mb-4">
          Ver todas
        </a>


        <h2 className="alert alert-warning">Series más populares</h2>

        <section className="row cards">

          {this.state.loadingSeries ? (
            <p className="alert alert-info">Cargando...</p>
          ) : (
            this.state.series.map((serie, i) => {
              if (i < 4) {
                return <MovieCard key={serie.id} data={serie} tipo="tv" />
              }
              return null;
            })
          )}

        </section>

        <a href="/series" className="btn btn-outline-warning">
          Ver todas
        </a>

      </div>
    );
  }
}

export default Home;