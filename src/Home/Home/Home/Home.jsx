import Banner from "../Banner/Banner";
import PatientSays from "../PatientReviews/PatientReviews";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-5 lg:px-28 xl:px-40">
        <Service></Service>
        <PatientSays></PatientSays>
      </div>
    </div>
  );
};

export default Home;
