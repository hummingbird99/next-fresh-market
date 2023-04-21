import S from "/styles/page.module.css";
import { hi, Button } from "./data.js";

export default function Cart() {
  let cart = ["Tomatoes", "Pasta", "Bacon"];

  return (
    <div>
      <h4 className={S.cartTitle}>{hi} Cart</h4>
      <Button color="red" name="Click me" />
      <Button color="blue" name="Click me" />
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
