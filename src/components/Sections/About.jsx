import { FaCheck } from "react-icons/fa";

function About() {
    return (
        <section className="contaner mx-auto py-5 px-3">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div className="container mx-auto">
                   

                    <h2 className="text-4xl font-bold text-violet-500 mb-6">Why Choose Us</h2>
                    <ul className="mt-9 space-y-4 text-gray-700">
                        <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheck className="text-violet-500 text-lg mr-2" />Stay Motivated:Personalized reminders to keep your fire burning.</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheck className="text-violet-500 text-lg mr-2" />Train Smarter:With customized workout plans, expert guidance, and progress tracking</li >
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheck className="text-violet-500 text-lg mr-2" />Connect & Grow:Join a community of like-minded individuals who lift each other up,</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheck className="text-violet-500 text-lg mr-2" /> All-in-One Platform:From workouts to wellness tracking and nutrition tips,</li>
                    </ul>

                </div>

                <div>
                    <img src="/bg.jpg" alt="collaboration photo" className="w-full h-100 object-cover rounded-2xl" />
                </div>
            </div>


        </section>
    )
}


export default About;