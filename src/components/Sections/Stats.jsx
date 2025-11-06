function Stats() {
    return (
        <div className=" grid-cols-1 hidden md:grid mt-3 p-8 rounded-3xl bg-violet-500 divide-y divide-white md:divide-y-0 md:divide-x md:diwhite md:grid-cols-4 gap-8 text-center">
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">10</h1>
                <p className="text-gray-100">Branches</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">100+</h1>
                <p className="text-gray-100">People Trained</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">30+</h1>
                <p className="text-gray-100">Trainers</p>
            </div>
             <div className="py-4">
                <h1 className="text-3xl font-bold text-white">5</h1>
                <p className="text-gray-100">Coaches</p>
            </div>
        </div>
    )
}

export default Stats;