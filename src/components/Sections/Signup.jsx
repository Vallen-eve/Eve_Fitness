function Signup() {
  return (

    <section className="flex flex-col h-screen items-center mx-auto  justify-center">
        <div className="bg-violet-400 p-10 rounded-lg shadow-lg w-90 ">
            
        <h1 className="text-center text-2xl text-violet-950 mb-5 font-bold">Signup</h1>
      
        
            <form action="@">
                <input type="text" name="" placeholder="name" id=""className="p-3 mb-5 rounded-md bg-white w-full" /> <br />
                <input type="email" name="" placeholder="email" id="" className="p-3 mb-5 rounded-md bg-white w-full"/> <br />
                <input type="password" name="" placeholder="password" id="" className="p-3 mb-5 rounded-md bg-white w-full"/> <br />
                <button type="submit" className="w-full bg-violet-950 text-white p-3 rounded-2xl cursor-pointer">Signup</button>
            </form>
            <p className="text-center">Already have an account? <a href="/login">Login</a></p>
      
       </div>
    </section>
    
  );
}

export default Signup;