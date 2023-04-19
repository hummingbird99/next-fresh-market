import S from "/styles/page.module.css";

export default function Home() {
  let name = "hummingbird99";
  return (
    <div>
      <h4 className={S.title}>벌새 마켓</h4>
      <h4 className={S.titleSub}>by {name}</h4>
    </div>
  );
}
