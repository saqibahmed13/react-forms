import { useState } from "react"

export default function Form(){
    const[value,setValue] = useState("hiKi");

    let handler = (evt) => {
    setValue(evt.target.value);
    }
    return(
        <div>
        <input type="text" value={value} onChange={handler} />
        <button>Submit</button>
        </div>
    )
}