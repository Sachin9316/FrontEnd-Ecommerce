import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="text-white min-h-screen w-full flex justify-center items-center flex-col">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
