import "./Product.css";
import Description from "./Description.jsx";
import Price from "./Price.jsx";

function Product({name,description,price}) {
    return(
        <div className="product">
        <Description name={name} description={description} />
        <Price price={price} />
        </div>
    )
}
export default Product;