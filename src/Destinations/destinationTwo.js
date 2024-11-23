import AppLinks from "../Links/applinks";
import DestinationLinks from "../Links/destinationLinks";
const SecondDestination = () => {
  return (
    <div>
      <AppLinks />
      <div>
        <div>
          <h1>PICK YOUR DESTINATION</h1>
        </div>
        <div>
          <DestinationLinks />
          <h1>MARS</h1>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <div>
            <p>
              <span>AVG. DISTANCE</span>
              <span>225 MIL. km</span>
            </p>
            <p>
              <span>EST. TRAVEL TIME</span>
              <span> 9 MONTHS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDestination;
