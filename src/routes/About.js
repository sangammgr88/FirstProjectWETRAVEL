import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://www.nepalsanctuarytreks.com/wp-content/uploads/2018/09/1024px-Phewa_lake_Pokhara.jpg"
        title="It's all About us"
        url="/"
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
    </>
  );
}
export default About;
