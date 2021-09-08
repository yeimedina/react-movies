import styles from './MovieDetails.module.css';
import movie from './movie.json';

export function MovieDetails(){
   const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
   return(
      <div className={styles.detailsContainer}>
         <img src={imageUrl} alt="" />
         <div>
            <p className={styles.title}>
               <strong>Title: </strong>{movie.title}
            </p>
            <p>
               <strong>Categoria: </strong>{movie.genres.map(genero => genero.name).join(" ")}
            </p>
            <p>
               <strong>Descripcion: </strong> {movie.overview}
            </p>
         </div>
      </div>
   );
}