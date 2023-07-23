import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Destination from "../components/Destination";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://www.nepalsanctuarytreks.com/wp-content/uploads/2018/09/5148063265_00f0e94f3b_o-scaled.jpg"
        title="Your Journey Your Story"
        text="Let's create memories together"
        btnonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
