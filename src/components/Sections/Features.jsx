import { FaCheck } from "react-icons/fa";


function Features() {
    return (

        <section className="container mx-auto py-7">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div>
                    <img src="/bg.jpg" alt="collaboration photo" className="w-full h-100 object-cover rounded-3xl" />
                </div>

                <div className="container mx-auto">
                    <h2 className="text-4xl text-violet-700 font-bold  mb-4 mt-8 md:text-5xl ">Our Mission:.</h2>
                                                                                                            
                    <p className="text-lg text-gray-700 mb-6 md:text-xl">To make fitness an empowering, motivating, and shared experience for everyone</p>

                    <p className="mt-9 space-y-4">
                        Personal Training & Coaching <br /> <br />

                        Our certified fitness coaches craft tailored workout plans that fit your lifestyle, schedule, and goals — whether you’re training at the gym or from home.
                       
                    </p>

                      <p className="mt-9 space-y-4">
                            Nutrition & Wellness Science <br /> <br />

                            Our nutrition experts provide balanced meal guidance and wellness insights that help you fuel your body for peak performance and recovery.
                       
                    </p>
                </div>
            </div>

        </section>

    )
}


export default Features