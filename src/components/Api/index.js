import axios from'axios'

const API_URL = 'http://localhost:8000/api/v1';

export async function GetMovieList() {
    const { data } = await axios.get(API_URL + "/movies");
    return data;
  }

  export async function GetMovieListByID({id}) {
    const { data } = await axios.get( `http://localhost:8000/api/v1/movies/${id}`);
    return data;
  }

  export async function GetQuesionByMovies({id}) {
    const { data } = await axios.get( `http://localhost:8000/api/v1/movies/quesAns/${id}`);
    return data;
  }