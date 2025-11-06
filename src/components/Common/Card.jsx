function Card({title,description,image}) {
    return (
        <div > 
        
            
            <div className="bg-white rounded-lg shadow-md p-6">
                {image && <img src={image} alt={title} className="w-full h-70 object-cover mb-4 rounded-md" />}
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    )
}   

export default Card