import { Link } from "react-router-dom";

function Hero() {
    return (
        <section id="hero" className=" text-center flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.7)), url('bg.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <main className="container mx-auto px-4 py-20">
                <div className=" text-center p-4 flex flex-col justify-center items-center relative">
                    <h1 className="text-5xl mx-auto font-bold w-full mb-4 text-white md:text-6xl md:w-200">Find Your Strength. Fuel Your Mind. <span className="text-violet-500"> Move with Mortivana.</span></h1>
                    <p className="text-xl hidden text-gray-100  mx-auto md:block md:w-150">
                        Mortivana isn’t just a fitness app — it’s your space to grow stronger, stay consistent, and rise together with a community that keeps you motivated every step of the way.
                    </p>

                        <Link to="/signup">
                            <button className="px-4 py-2 bg-violet-500 text-white rounded-md my-5">Register</button>
                        </Link>
                       
                    
                </div>
            </main>

        </section>
    )
}

export default Hero;