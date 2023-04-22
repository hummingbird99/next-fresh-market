import S from "/styles/page.module.css";
import { Button } from "./data.js";

export default function Cart() {
  let cart = [
    { name: "Tomatoes", price: 40, count: 1 },
    { name: "Pasta", price: 50, count: 1 },
    { name: "Bacon", price: 60, count: 1 },
  ];

  const cartItems = cart.map((item, i) => <CartItem product={item} key={i} />);

  return (
    <div>
      <h4 className={S.cartTitle}> Cart</h4>
      <div className={S.cartDiv}>
        <Button color="#00ccff" name="Move to Payment">
          Buy now
        </Button>
        <Button color="#73ffff" name="Delete item">
          Delete
        </Button>
      </div>
      {cartItems}
    </div>
  );
}

const CartItem = ({ product }) => {
  const { name, price, count } = product;

  return (
    <div className={S.cartItem}>
      <p className={S.cartSub}>{name}</p>
      <p className={S.cartSub}>${price}</p>
      <p className={S.cartSub}>{count}개</p>
    </div>
  );
};
