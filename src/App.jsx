import styles from './App.module.css'
import { MovieDetails } from './pages/MovieDetails';
import {LandingPage } from './pages/LandingPage';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

export function App({titulo, nombre}){
   return(
      <Router>
         <header>
            <Link to="/">
            <h1 className = {styles.title}>Movies</h1>
            </Link>
         </header>
         <main>
         <Switch>
            <Route path="/Movie/:movieId">
               <MovieDetails/>
            </Route>
            <Route path="/">
               <LandingPage/>
            </Route>
         </Switch>
         </main>
      </Router>
   );
}