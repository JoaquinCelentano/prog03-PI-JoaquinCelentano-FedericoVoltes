import React from "react";

function Home() {
  return (
    <div className="container">

      <h1>UdeSA Movies</h1>

      
      <form className="search-form">
        <input type="text" name="searchData" placeholder="Buscar..." />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>

      <h2 className="alert alert-primary">Peliculas Mas Polupares</h2>

      <section className="row cards">

        <article className="single-card-movie">
          <img src="https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg" className="card-img-top" alt="" />
          <div className="cardBody">
            <h5 className="card-title">The Thursday Murder Club</h5>
            <p className="card-text">
              A group of senior sleuths passionate about solving cold cases get plunged into a real-life murder mystery.
            </p>
            <a href="" className="btn btn-primary">Ver más</a>
            <a href="" className="btn alert-primary">🩶</a>
          </div>
        </article>

        <article className="single-card-movie">
          <img src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg" className="card-img-top" alt="" />
          <div className="cardBody">
            <h5 className="card-title">F1</h5>
            <p className="card-text">
              Racing legend Sonny Hayes returns to Formula 1.
            </p>
            <a href="" className="btn btn-primary">Ver más</a>
            <a href="" className="btn alert-primary">♥️</a>
          </div>
        </article>

      </section>

      
      <h2 className="alert alert-primary">Peliculas en cartel</h2>

      <section className="row cards">

        <article className="single-card-playing">
          <img src="https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg" className="card-img-top" alt="" />
          <div className="cardBody">
            <h5 className="card-title">War of the Worlds</h5>
            <p className="card-text">
              Analyst tracks threats through surveillance.
            </p>
            <a href="" className="btn btn-primary">Ver más</a>
            <a href="" className="btn alert-primary">🩶</a>
          </div>
        </article>

      </section>

    </div>
  );
}

export default Home;