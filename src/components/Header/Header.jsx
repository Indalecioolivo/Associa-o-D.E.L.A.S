import "./Header.css";
import MenuImg from "../../assets/sandwich.png";

export default function Header() {
  return (
    <header>
      <img src={MenuImg} alt="" />
      <p>Associação DELAS</p>
    </header>
  );
}
