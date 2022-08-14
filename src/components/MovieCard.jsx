import React from 'react';
import { useState } from 'react';

function MovieCard(props) {  

    const [title, setTitle] = useState("****");
    const [description,setDescription]=useState("***");
    const [posterURL, setPosterURL] = useState("****");
    const [rating, setRating] = useState("****");
   
    const handleChange=(e)=>{
        setTitle(e.target.value)
    }
    const handleChange1=(e)=>{
        setDescription(e.target.value)
    }
    const handleChange2=(e)=>{
        setPosterURL(e.target.value)
    }
    const handleChange3=(e)=>{
        setRating(e.target.value)
    }
    

    


    
    return (
        <div>
            Titre <input  placeholder="Insert name of a movie" type="text" onChange={handleChange}/>
           desc<input  placeholder="----" type="text" onChange={handleChange1}/>
            URL<input placeholder="----"type="text" onChange={handleChange2}/>
            Rating<input placeholder="------"type="text" onChange={handleChange3}/>
          <button onClick={(e)=>{ props.add(title,description,posterURL,rating);
           e.preventDefault(); }}>ADD</button>
        </div>
    );
}

export default MovieCard;