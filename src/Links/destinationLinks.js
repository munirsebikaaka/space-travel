import { NavLink } from "react-router-dom";

const DestinationLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/first"}>first</NavLink>
        </li>
        <li>
          <NavLink to={"/second"}>second</NavLink>
        </li>
        <li>
          <NavLink to={"/third"}>third</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default DestinationLinks;
