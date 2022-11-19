import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";


export default function Card(props) {
  console.log(props);

  return (
    
    <>
      <div className="card">
        <div className="img-card">
          <img src={props.img} alt=""></img>
        </div>
        <div className="detail-card">
          <h5 className= "title-card">{props.title}</h5>
          <p>{props.detail}</p>
          <h6 className="price-card">${props.price}</h6>
          <h6>Stock: {props.stock}</h6>
      
        </div>
        <Link to= {`/producto/${props.id}`}>
        <Button color={props.colorbtn}>{`Comprar`}</Button>
        </Link>

      </div>
      
    </>
  );
}
