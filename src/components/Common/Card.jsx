import ProductCard from "./productCard";

const Card = (props) => {
  return (
    <div className="p-4 text-center">
      {/* Image card */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <ProductCard image={props.image} />
      </div>

      {/* Description below the card */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{props.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{props.description}</p>

        <div className="mt-3">
          {props.dis_price && (
            <span className="text-violet-600 font-bold mr-2">
              ${props.dis_price}
            </span>
          )}
          {props.price && (
            <span className="text-gray-500 line-through">${props.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
