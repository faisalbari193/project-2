import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Experience />
      <Offer />
      <LatestProjects />
    </>
  );
}

export default App;
