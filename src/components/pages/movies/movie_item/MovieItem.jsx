import styles from '../Movies.module.css'
import React from 'react'

const MovieItem = ({movie}) => {
   <div key={movie["#IMDB_ID"]} className={styles.item}>
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
    </div>
}

export default React.memo(MovieItem)