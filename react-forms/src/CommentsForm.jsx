import { useState } from "react"

export default function CommentsForm(){

    const[formData,setformData] = useState({
       username:"",
       remark:"",
       rating:"5" 
    });

    let inputHandler = (evt) =>{
        setformData((currDatas)=>{
            return{...currDatas, [evt.target.name]:evt.target.value }
        })
        
    }

    let submitHandler = (event) =>{
        event.preventDefault();
        setformData({
            username:"",
       remark:"",
       rating:"5" 
        })
    
    }

return(
    <div>
        <h4>Give a Comment!</h4>
        <form  onSubmit={submitHandler}>
            <label htmlFor="username"> Username: </label>
            <input type="text" placeholder="username" id="username" name="username"  value={formData.username} onChange={inputHandler}/>
            <br />
            <br />
            <label htmlFor="remark"> Remarks: </label>
            <textarea value={formData.remark} onChange={inputHandler} name="remark"  id="remark">Remarks</textarea >
            <br />
            <br />
            <label htmlFor="rating"> Rating: </label>
            <input type="number" placeholder="rating"  id="rating" name="rating"  min={1} max={5} value={formData.rating} onChange={inputHandler}/>
            <br />
            <br />
            <button> Add Comment </button>
        </form>
    </div>
)
}