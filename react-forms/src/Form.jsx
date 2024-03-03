import { useState } from "react"

export default function Form(){
    const[formData, setformData] = useState({
        fullName:"",
        userName:"",
        password:""
    });

    // let multipleInputHandler = (evt) => {
    //     let fieldName = evt.target.name;
    //     let newVal = evt.target.value;

    //     setformData((currData)=>{
    //     currData[fieldName] = newVal
    //     return{...currData}         // we donot know which fieldset it is so we use [ brackets]  
        
    //     //or 

    //     // currData[fieldName] = newVal
    //     // return{...currData , [evt.target.name] : evt.target.value } 

    // });
    // }

    let multipleInputHandler = (evt) => {
    
        setformData((currData) => {
        return {...currData , [evt.target.name] : evt.target.value }
        })
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
        <form onSubmit={handlerSubmit}>
        <label htmlFor="connect">FullName: </label>
         <input type="text"  placeholder="Enter Fullname" id="connect" name="fullName" value={formData.fullName} onChange={multipleInputHandler} />  
         {/* this name [name:"fullName"] should be same as useState key to access and match */}
        <br />
        <br />
        <label htmlFor="connects">UserName: </label>
        <input type="text" id="connects"  placeholder="Enter Username"  name="userName" value={formData.userName} onChange={multipleInputHandler}/>
        {/* this name [name:"userName] should be same as useState key to access and match */}
        <br />
        <br />
        <label htmlFor="connectss">password: </label>
        <input type="text" id="connectss"  placeholder="Enter password"  name="password"  value={formData.password} onChange={multipleInputHandler} />
        <button>Submit</button>
        </form>
    )
}