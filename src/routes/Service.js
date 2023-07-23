import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/14989388/pexels-photo-14989388/free-photo-of-landscape-photography-of-phewa-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
