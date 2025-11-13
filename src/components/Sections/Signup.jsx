import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



function Signup() {

const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // function for handling the signup after submit is clicked
  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:3000/signup", {
        name,
        email,
        password,
      });
      alert("You have sucesfully Registered Login now");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error has occured during sign up");
    }
  };


  return (

    <section className="flex flex-col h-screen items-center mx-auto  justify-center">
        <div className="bg-violet-400 p-10 rounded-lg shadow-lg w-90 ">
            
        <h1 className="text-center text-2xl text-violet-950 mb-5 font-bold">Signup</h1>
      
        
            <form onSubmit={handleSignup}>
                <input type="text" name=""  value={name}  onChange={(e) => setName(e.target.value)} placeholder="name" id=""className="p-3 mb-5 rounded-md bg-white w-full" /> <br />
                <input type="email" name="" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="email" id="" className="p-3 mb-5 rounded-md bg-white w-full"/> <br />
                <input type="password" name="" value={password}  onChange={(e) => setPassword(e.target.value)}  placeholder="password" id="" className="p-3 mb-5 rounded-md bg-white w-full"/> <br />
                <button type="submit" className="w-full bg-violet-950 text-white p-3 rounded-2xl cursor-pointer">Signup</button>
            </form>
            <p className="text-center">Already have an account? <a href="/login">Login</a></p>
            
      
       </div>
    </section>
    
  );
}

export default Signup