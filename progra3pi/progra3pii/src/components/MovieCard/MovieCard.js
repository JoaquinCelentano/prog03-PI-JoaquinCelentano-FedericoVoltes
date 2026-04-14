function MovieCard(props) {
  return (
    <article className="single-card-movie">

      <img
        src={"https://image.tmdb.org/t/p/w500" + props.data.poster_path}
        className="card-img-top"
        alt={props.data.title ? props.data.title : props.data.name}
      />

      <div className="cardBody">
        <h5 className="card-title">{props.data.title ? props.data.title : props.data.name}</h5>

        <p className="card-text">
          {props.data.overview}
        </p>

        <a href="#" className="btn btn-primary">Ver más</a>
        <a href={`/detalle/${props.tipo}/${props.data.id}`}>Ver detalle</a>

      </div>

    </article>
  );
}

export default MovieCard;