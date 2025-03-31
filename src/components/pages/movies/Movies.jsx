import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import MovieItem from './movie_item/MovieItem.jsxs'
// import axios from 'axios'
// import { fetchMoviesAB } from '../../../services/movie_api'
import { fetchMovies } from '../../../reducers/moviesSlice';

// import {movies} from './movies.data.js'
import styles from './Movies.module.css'

const Movies = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.movies);
  // const [movies, setMovies] = useState([])

  useEffect(()=>{
    dispatch(fetchMovies());
    }, [dispatch])

    if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h1><p className={styles.title}>Фильмы</p></h1>
      <div>
        {items.length ? (
            items.map(movie => ( <div key={movie["#IMDB_ID"]} className={styles.item}>
                    <div
                        className={styles.image}
                        style={{ 
                            backgroundImage: `url(${movie["#IMG_POSTER"]})`
                        }}
                    />
                    <div className={styles.info}>
                        <h2>{movie["#TITLE"]}</h2>
                        <p>{movie["#ACTORS"]}</p>
                    </div>
                </div>))
          //  <MovieItem key={movie.id} movie={movie} /> )
        ) : (
          <p>There are not movies</p>
        )}
        
      </div>
    </div>
  )
}
  
  export default Movies
  