import S from "/styles/page.module.css";
import { Button } from "./data.js";

export default function Cart() {
  let cart = ["Tomatoes", "Pasta", "Bacon"];

  return (
    <div>
      <h4 className={S.cartTitle}> Cart</h4>
      <div className={S.cartDiv}>
        <Button color="#00ccff" name="Buy now" />
        <Button color="#73ffff" name="Delete" />
      </div>
      <CartItem product={cart[0]} />
      <CartItem product={cart[1]} />
      <CartItem product={cart[2]} />
    </div>
  );
}

const CartItem = (props) => {
  return (
    <div className={S.cartItem}>
      <p className={S.cartSub}>{props.product}</p>
      <p className={S.cartSub}>$40</p>
      <p className={S.cartSub}>1개</p>
    </div>
  );
};
