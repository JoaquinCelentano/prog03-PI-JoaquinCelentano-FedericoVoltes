import React, {Component} from "react";  
const apiKey ='5aba41484f01b327ba117f875007574f'
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pagina: 1
    };
  }


  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${this.state.pagina}&api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  }

  render(){
    return(
        <h1>Hola</h1>
    )
  }

}

export default Movies;