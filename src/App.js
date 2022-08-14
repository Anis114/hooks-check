
import './App.css';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import {useState} from 'react'

function App() {

  const  [movielist, setMovielist]=useState([]);
  setMovielist([...movielist,{title:"titanic",
  description:"aaaaaa",
  posterURL:"aaaa",
  rating:"aaa"},
  {title:"bigstan",
  description:"aaaaaa",
  posterURL:"aaaa",
  rating:"aaa"},
  {title:"attack",
  description:"aaaaaa",
  posterURL:"aaaa",
  rating:"aaa"}
  ])
  const AddMovie=(x,y,z,w)=>{
setMovielist([...movielist, {title:x,description:y,posterURL:z,rating:w}])

  }



 

  return (
    <div className="App">
      <MovieCard add={AddMovie}></MovieCard>
     <MovieList movielist={movielist}></MovieList>
     
    </div>
  );
}

export default App;
