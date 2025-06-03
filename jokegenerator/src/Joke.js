// Joke.js

import { useState } from "react";
 
import Button from "./Button";
import './Joke.css';



const Joke = ()=>{
    const [Joke,setJoke] = useState("");

    const fetchJoke = () =>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((response)=> response.json())
        .then((data)=>{
            setJoke(data.joke);
        })
    }

    return (
        <>
          <div className="joke">
             <Button callApi={fetchJoke}/>
           <p>{Joke}</p>

          </div>
        </>
    )
}

export default Joke;