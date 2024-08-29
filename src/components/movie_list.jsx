import { useEffect, useState } from "react"
import "../styling/movie_list.css";
async function getLatestMovies() {
    try {

        let movies = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
            headers: {
                "accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E0YWY5ZjdmOWU1MzI4ZWI4NmUxMzI3YzliZjY2MyIsIm5iZiI6MTcyNDM5NTk3Ni4zNTE2MzEsInN1YiI6IjYzZDg3Y2VhM2RjMzEzMDBhZjIyZDZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ChbyfvM1_tFGAMqihfRd2wwamTvRs39rQ-FAm_Po5sQ"
            }
        });

        if (movies.status == 200) {
            return movies.json();
        }

        else {
            return [];
        }

    } catch (error) {

        return [];

    }
}

let MovieListComponent = () => {
    let change = 0;
    let [movies, setMovies] = useState([]);

    useEffect(() => {

        getLatestMovies().then((popularMovies) => {
            if (popularMovies['results']) {
                setMovies(popularMovies['results']);
            }
        })

    }, [])

    return <>
        <div id="universalContainer">

            {
                movies ? movies.map(movie => {
                    return <div className="movieCard" key={movie['id']}>
                        <img id="moviePoster" src={`https://image.tmdb.org/t/p/original/${movie['poster_path']}`} alt="" />

                        <h3>{movie['title']}</h3>
                        <p>{movie['release_date']}</p>
                    </div>
                }) : null
            }

        </div>
    </>

}



export { MovieListComponent }