import { FaCheck } from "react-icons/fa"   


function Features() {
    return (

        <section className="container mx-auto py-7 my-12 px-7">
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden mx-auto grid-1 ">
                
                <div>
                    <img src="/about(4).jpg" alt="collaboration photo" className="width: 553;height: 443;top: 74px;left: 100px;angle: 0 deg;opacity: 1; rounded-2xl"/>
                </div>


                <div className="container mx-12 my-12 flex flex-col flex-direction: align-top justify-items-end-safe absolute start-0 ">
                    <h2 className="text-4xl text-violet-700 font-bold my-0 mx-150 px-40 py-0 mb-90 md:text-5xl justify-end-safe ">Mission.</h2>
                    </div>

                    <ul className="mt-9 space-y-4 text-gray-700  " > 
                                                                                                            
                 <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheck className="text-violet-500 text-lg mr-2"/>
                    To make fitness an empowering, motivating, and shared experience for everyone</li>
                    <li className="text-lg flex items-start  gap-4 mb-2"> <FaCheck className="text-violet-500 text-lg mr-2" />
                           Personal Training & Coaching <br /> Our certified fitness coaches craft tailored workout plans that fit your lifestyle, schedule, and goal—whether you’re training at the gym or from home. </li>

                 <li className="text-lg flex items-start  gap-4 mb-"> <FaCheck className="text-violet-500 text-lg mr-2"/>
                     Nutrition & Wellness Science <br /> </li>
                <li className="text-lg flex items-start  gap-4 mb-"> <FaCheck className="text-violet-500 text-lg mr-2"/> Our nutrition experts provide balanced meal guidance and wellness insights that help you fuel your body for peak performance and recovery. 
                             </li>
                    </ul>
               
            </div>

        </section>
)};


export default Features;