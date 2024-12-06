import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home Page</p>
      <Link to="/events">Events</Link>
    </div>
  );
}
