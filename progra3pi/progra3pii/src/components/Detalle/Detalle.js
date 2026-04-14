import React, { Component } from "react";
const apiKey ='5aba41484f01b327ba117f875007574f'

class Detalle extends Component {
    constructor(props){
        super(props);
        this.state = {
            detalle : null
        };
    };

componentDidMount() {
    let id = this.props.match.params.id;
    let tipo = this.props.match.params.tipo;
    fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ detalle: data });
      })
      .catch((err) => console.log(err));
}

render() {
  return (
    <section className="container">
      {this.state.detalle && (
        <article className="single-card-movie">
          <img src={`https://image.tmdb.org/t/p/w500${this.state.detalle.poster_path}`} alt={this.state.detalle.title ? this.state.detalle.title : this.state.detalle.name} className="card-img-top"/>

          <div className="card-body">
            <h2> {this.state.detalle.title ? this.state.detalle.title : this.state.detalle.name} </h2>

            <p>Calificación: {this.state.detalle.vote_average}</p>

            <p>Fecha de estreno:{" "} {this.state.detalle.release_date ? this.state.detalle.release_date : this.state.detalle.first_air_date}</p>

            {this.props.match.params.tipo === "movie" ? (
              <p>Duración: {this.state.detalle.runtime} minutos</p>
            ) : null}

            <p>Sinopsis: {this.state.detalle.overview}</p>

            <p>Género:{" "} {this.state.detalle.genres && this.state.detalle.genres.length > 0 ? this.state.detalle.genres[0].name : "Sin género"}</p>

{document.cookie ? (
    <button className="btn btn-primary"> Agregar a favoritos</button>
) : null}
          </div>
        </article>
      )}
    </section>
  );
}
}

export default Detalle;