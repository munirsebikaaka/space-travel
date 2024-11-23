import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDestinations from "./Destinations/AllDestinations";
import AllTechnologies from "./Technologies/AllTechnologies";
import AllCrew from "./Crews/AllCrews";
import Home from "./Home";
import FirstDestination from "./Destinations/destinationOne";
import SecondDestination from "./Destinations/destinationTwo";
import ThirdDestination from "./Destinations/destinationThree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destinations" element={<AllDestinations />}>
          <Route index element={<FirstDestination />} />
          <Route path="first" element={<FirstDestination />} />
          <Route path="second" element={<SecondDestination />} />
          <Route path="third" element={<ThirdDestination />} />
        </Route>
        <Route path="technology" element={<AllTechnologies />} />
        <Route path="crews" element={<AllCrew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
