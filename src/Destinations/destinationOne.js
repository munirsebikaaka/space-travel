import AppLinks from "../Links/applinks";
import DestinationLinks from "../Links/destinationLinks";

const FirstDestination = () => {
  return (
    <div>
      <AppLinks />
      <div>
        <div>
          <h4>PICK YOUR DESTINATION</h4>
        </div>
        <div>
          <DestinationLinks />
          <h1>MOON</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div>
            <p>
              <span>AVG. DISTANCE</span>
              <span>384,400 km</span>
            </p>
            <p>
              <span>EST. TRAVEL TIME</span>
              <span> 3 DAYS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstDestination;
