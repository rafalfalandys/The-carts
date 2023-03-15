import { Link, useParams } from "react-router-dom";
import classes from "./CartCard.module.scss";

function CartCard(props) {
  const params = useParams();
  const discount = props.total - props.discountedTotal;

  const isActive = +params.cartId === props.id;

  return (
    <li>
      <Link
        to={`${props.id}`}
        className={`${classes.cart} ${isActive ? classes.active : ""}`}
      >
        <header className={classes.header}>
          <ion-icon name="cart-outline" size="small" />
          <h2> &nbsp;Cart {props.id}</h2>
        </header>
        <p>{props.totalQuantity} items</p>
        <p>
          <strong>${discount}</strong> discount
        </p>
        <div className={classes.price}>
          <h3 className={classes.total}>${props.total}</h3>
          <h3 className={classes["total-discount"]}>
            ${props.discountedTotal}
          </h3>
        </div>
      </Link>
    </li>
  );
}

export default CartCard;