import { useState } from "react";

const Contact=()=>{
const [form,setform]=useState({
    fname:'',
    lname:''
});

const Change=(e)=>{
    const {namess,value}=e.target;
    setform((name)=>{
        return{
            ...name,
            [namess]:value
        }

    })

}


const Submit=(e)=>{
e.preventDefault();
alert(`my first name is ${form.fname} and my password is ${form.lname}`)
}

    return(
    <>
        <input type="text" 
            className="form-control"
            name="fname"
            value={form.fname}
           onChange={Change} 
           placeholder="Email"

           />
           <label htmlFor="">First Name</label>
           <br />

           <input type="password" 
            className="form-control"
            name="lname"
            value={form.lname}
            onChange={Change} 
            placeholder="password"


           />
           <label htmlFor="">Lname Name</label>
           <br />

           <button className="btn btn-primary" onClick={Submit}>submit</button>


    </>
)
}
export default Contact;