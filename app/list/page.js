import S from "/styles/page.module.css";

export default function List() {
  let item = ["Tomatoes", "Pasta", "Bacon"];

  return (
    <div>
      <h4 className={S.title}>상품 목록</h4>
      {item.map((product, i) => {
        return (
          <div className={S.food} key={i}>
            <img src={`/food${i}.png`} className={S.foodImg} />
            <h4 className={S.title}>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
