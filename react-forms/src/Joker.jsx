import { useEffect, useState } from "react";

export default function Joker(){
const URL = "https://official-joke-api.appspot.com/random_joke";

const[joke,setJoke] = useState({});

const getNewJoke = async() =>{
let response = await fetch (URL)
let jsonKaResponse = await response.json();
console.log(jsonKaResponse);   // here we got setup and punchline
setJoke({setup: jsonKaResponse.setup , punchline:jsonKaResponse.punchline});
};


// we are using useEffect when we refresh there should already one joke should be displayed 
// following is the syntax we need to use arrow function and then call that function 
useEffect(()=>{
    async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonKaResponse = await response.json();
        setJoke({setup:jsonKaResponse.setup, punchline:jsonKaResponse.punchline});
    }
    getFirstJoke();   // here it is called 
},[]);    // for first time initial rendering we use []



    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}