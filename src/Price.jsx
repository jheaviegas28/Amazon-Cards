import "./Price.css"
function Price({oldprice,newprice}){
    return(
        <>
        <span>{newprice}</span>
        &nbsp;&nbsp;&nbsp;
        <span>{oldprice}</span>
        </>
    )
}
export default Price;