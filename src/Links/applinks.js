import { NavLink } from "react-router-dom";

const AppLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/destinations"}>Destinations</NavLink>
        </li>
        <li>
          <NavLink to={"/technology"}>Technologies</NavLink>
        </li>
        <li>
          <NavLink to={"/crews"}>Crew</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default AppLinks;
