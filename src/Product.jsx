import Description from "./Description.jsx";
import Price from "./Price.jsx";

function Product({name,description,price}) {
    let oldprice=[12000,50000,13000]
    let newprice=[10000,40000,12000]
    return(
        <div className="product">
        <Description name={name} description={description} />
        <Price oldprice={oldprice[idx]} newprice={newprice[idx]} />
        </div>
    )
}
export default Product;