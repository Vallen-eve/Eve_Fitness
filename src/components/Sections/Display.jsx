

function Display() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:mt-20">
                    <h3 className="text-3xl font-bold text-violet-500 md:text-4xl mb-10"> Our Services</h3>
                    <p className="text-lg mb-8 md:text-xl">Checkout our Our unique architectural
                        services that transforms abstract ideas into concrete and buildable plans. </p>
                    <button className="px-6 py-3 bg-violet-500 text-white rounded-sm">See more</button>
                </div>

                <div>
                    <img src="/bg.jpg" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-xl mt-3 font-bold text-gray-900 ">Free Consultation</h3>

                </div>

                <div>
                    <img src="/bg.jpg" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-xl mt-3 font-bold text-gray-900">Project Management</h3>

                </div>

                <div>
                    <img src="/bg.jpg" alt="completed buliding" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-xl mt-3 font-bold text-gray-900">Frequent visit</h3>

                </div>

            </div>
        </section>
    )
}

export default Display;