const ProductCard = (props) => {
    return (
        <div className=" p-4 shadow hover:shadow-lg transition duration-300 border rounded">
        <div><img src={props.image} alt={props.name} className="w-full h-48 object-cover mb-4 rounded" /> </div>
        <h2 className="font-family: Saira;font-weight: 600;font-size: 24px;leading-trim: NONE;line-height: 130%;letter-spacing: 0%;text-transform: capitalize">{props.name}</h2>
 <div className="font-family: Saira font-weight: 400;font-style: Regular;font-size:16px leading-trim: NONE line-height: 165% letter-spacing: 0%;">{props.dis_price}<span className="font-family: Saira;
font-weight: 400 font-style: Regular font-size: 14px;leading-trim: NONE line-height: 130% letter-spacing: 10% text-decoration: line-through"> {props.price}</span></div>

        </div>
    );
}
export default ProductCard;