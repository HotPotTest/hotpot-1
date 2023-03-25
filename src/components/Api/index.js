import axios from'axios'

const API_URL = 'http://15.206.72.111/api/v1';

export async function GetMovieList() {
    const { data } = await axios.get(API_URL + "/movies");
    return data;
  }