import ProductCard from "./productCard";   

const Card = (props) => {
    return (
        <div className=" p-4 ">
            <ProductCard 
            image={props.image}
            name={props.title}
            description={props.description}
            dis_price={props.dis_price} 
            price={props.price} className="text-decoration: line-through text-color-gray-500 justify-center"
            />
            
        </div>
    );
}

export default Card;


