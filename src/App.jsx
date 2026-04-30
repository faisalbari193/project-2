import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import OurClient from "./components/OurClient/OurClient";
import TopServices from "./components/TopServices/TopServices";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Experience />
      <Offer />
      <LatestProjects />
      <TopServices />
      <OurClient />
    </>
  );
}

export default App;
