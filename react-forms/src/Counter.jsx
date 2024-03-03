import { useEffect, useState } from "react"

export default function Counter(){
    const[count,setCount] = useState(0);
    const[county,setCounty] = useState(0);


    let incCount = ()=>{
        setCount((value)=>value+1);
    }
    
    // useEffect(function printSomething(){
    //     console.log("side effect");
    // })



     useEffect(function printSomething(){
        console.log("side effect");
    },county);              // this will render (execute in console) only for second use state not for first 



    
    // useEffect(function printSomething(){
    //     console.log("side effect");
    // },[]);     // this will render (execute in console) only for first time 

    return(
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>+1</button>
        </div>
    )
}