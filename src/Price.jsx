import "./Price.css"
function Price({oldprice,newprice}){
    return(
        <div className="price">
        <span style={{textDecoration:"line-through"}}>{oldprice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{fontWeight:"bold"}}>{newprice}</span>
        </div>
    )
}
export default Price;