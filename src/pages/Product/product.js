import { useParams } from "react-router-dom";
function Product(){

    //     nome da const preecisa ser o memso que esta definido no route, exemplo route: "./:id" no use params é const {id}
    const {id} = useParams();
 return (
    <div>
        <h1>Produto numero: {id} </h1>
    </div>
 )
}
export default Product;