import Product from "./Product.jsx";
function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    return(
        <div style={styles}>
        <Product  name="BOAT Earphones" idx={0}/>
        <Product  name="LENOVO Laptop" idx={1}/>
        <Product  name="APPLE Macbook" idx={2}/>
        </div>
    )
}
export default ProductTab;