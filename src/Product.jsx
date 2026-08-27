import "./Product.css";
import Description from "./Description.jsx";
import Price from "./Price.jsx";

function Product({name,price,idx}) {
    let oldprice=["12000","50000","13000"];
    let newprice=["10000","40000","12000"];
    let description=["Good quality earphones","Good quality laptop","Good quality Macbook"];
    return(
        <div className="product">
        <Description name={name} description={description[idx]} />
        <Price oldprice={oldprice[idx]} newprice={newprice[idx]} />
        </div>
    )
}
export default Product;