import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


     // function for handling the login
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      // storing the generated token in the local storage for easy accessibility
      localStorage.setItem("token", res.data.token);
      alert("You have sucessfully loged in");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Invalid Credentials");
    }
  };


  return (

    <section className="flex flex-col h-screen items-center mx-auto  justify-center">
        <div className="bg-violet-400 p-10 rounded-lg shadow-lg w-90 ">
            
        <h1 className="text-center text-2xl text-violet-950 mb-5 font-bold">Login</h1>
      
        
            <form onSubmit={handleLogin}>
                
                <input type="email" name="" value={email}  onChange={(e) => setEmail(e.target.value)}   placeholder="email" id="" className="p-3 mb-5 rounded-md bg-white w-full"/> <br />
                <input type="password" name="" value={password}  onChange={(e) => setPassword(e.target.value)}   placeholder="password" id="" className="p-3 mb-5 rounded-md bg-white w-full"/> <br />
                <button type="submit" className="w-full bg-violet-950 text-white p-3 rounded-2xl cursor-pointer">Login</button>
            </form>
      
       </div>
    </section>
    
  );
}

export default Login;