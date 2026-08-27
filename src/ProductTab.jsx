import Product from "./Product.jsx";
function ProductTab(){
    return(
        <>
        <Product description="Good quality earphones" name="BOAT Earphones" idx={0}/>
        <Product description="Good quality laptop" name="LENOVO Laptop" idx={1}/>
        <Product description="Good quality Macbook" name="APPLE Macbook" idx={2}/>
        </>
    )
}
export default ProductTab;