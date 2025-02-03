import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjA1NmI3MDA0NjRjMDNkNzhmMTQyMTIwZmZkYjhjMSIsIm5iZiI6MTczODI0NDkwMy40MzcsInN1YiI6IjY3OWI4MzI3YzM1NzIxODg1YTM0NWY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pp5uC7Dhvk2VJs7oU8Q60XSWMG4z0y4DIAz7fSV3Ejc'
    }
}) 

export default instance;