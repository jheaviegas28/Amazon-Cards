import Product from "./Product.jsx";
function ProductTab(){
    return(
        <>
        <Product description="Good quality earphones" name="BOAT Earphones" price={2999}/>
        <Product description="Good quality laptop" name="LENOVO Laptop" price={70099}/>
        <Product description="Good quality Macbook" name="APPLE Macbook" price={120000}/>
        </>
    )
}
export default ProductTab;