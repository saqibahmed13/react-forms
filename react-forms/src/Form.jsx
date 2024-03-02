import { useState } from "react"

export default function Form(){
    const[value, setValue] = useState("");
    let handler = (evt) => {
    setValue(evt.target.value);
    }
    return(
        <div>
        <label htmlFor="connect"></label>
        <input type="text" id="connect" value={value} onChange={handler} />
        <button>Submit</button>
        </div>
    )
}