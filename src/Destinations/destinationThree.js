import AppLinks from "../Links/applinks";
import DestinationLinks from "../Links/destinationLinks";

const ThirdDestination = () => {
  return (
    <div>
      <AppLinks />
      <div>
        <div>
          <h1>PICK YOUR DESTINATION</h1>
        </div>
        <div>
          <DestinationLinks />
          <h1>EUROPA</h1>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div>
            <p>
              <span>AVG. DISTANCE</span>
              <span>628 MIL. km</span>
            </p>
            <p>
              <span>EST. TRAVEL TIME</span>
              <span> 3 YEARS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdDestination;
