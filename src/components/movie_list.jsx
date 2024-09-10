import { useEffect, useReducer, useState } from "react"
import "../styling/movie_list.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLatestMovies } from "../store";
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
    // state -> data
    // let location = useLocation();

    // how to trigger an action
    let getAllMovies = useDispatch();


    let data = useSelector((state) => {
        return state?.movies?.movies;
    });

    let [movies, setMovies] = useState(data);



    getAllMovies(fetchAllLatestMovies())
    useEffect(() => {
        setMovies(data)
    }, [data])



    // console.log(location.state);

    let navigate = useNavigate();

    return <>
        <div id="universalContainer">
            {
                movies ? movies?.map(movie => {
                    return <div onClick={() => {

                        navigate(`/movie/${movie['id']}`, {
                            state: {
                                'title': movie['title']
                            }
                        })

                    }} className="movieCard" key={movie['id']}>
                        <img id="moviePoster" src={`https://image.tmdb.org/t/p/original/${movie['poster_path']}`} alt="movieIMG" />
                        <h3>{movie['title']}</h3>
                        <p>{movie['release_date']}</p>
                    </div>
                }) : null
            }
        </div>
        {/* <Link to={"//webseries"}>Web series  page</Link> */}
    </>

}

export { MovieListComponent }