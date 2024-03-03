import { useState } from "react"

export default function Form(){
    const[formData, setformData] = useState({
        fullName:"",
        userName:"",
        password:""
    });

    let multipleInputHandler = (evt) => {
        let fieldName = evt.target.name;
        let newVal = evt.target.value;

    setformData((currData)=>{
        currData[fieldName] = newVal
        return{...currData}         // we donot know which fieldset it is so we use [ brackets]  
        
        //or 

        // currData[fieldName] = newVal
        // return{...currData , [evt.target.name] : evt.target.value } 

    });
    }

    let handlerSubmit = (event)=>{
        event.preventDefault();

        //to empty the multiple inputs will use like this 
        setformData({
            fullName:"",
             userName:"",
            password:""
        })
      }

    return(
        <div>
        <form onSubmit={handlerSubmit}>
        <label htmlFor="connect">FullName: </label>
         <input type="text"  placeholder="Enter Fullname" id="connect" value={formData.fullName} onChange={multipleInputHandler} name="fullName"/>  
         {/* this name [name:"fullName"] should be same as useState key to access and match */}
        <br />
        <br />
        <label htmlFor="connect">UserName: </label>
        <input type="text" id="connect"  placeholder="Enter Username" value={formData.userName} onChange={multipleInputHandler} name="userName" />
        {/* this name [name:"userName] should be same as useState key to access and match */}
        <br />
        <br />
        <label htmlFor="connect">password: </label>
        <input type="text" id="connect"  placeholder="Enter password" value={formData.password} onChange={multipleInputHandler} name="password" />
        <button>Submit</button>
        </form>
        </div>
    )
}