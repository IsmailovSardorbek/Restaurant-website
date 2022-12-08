import Contact from "../components/Contact/Contact";
import FoodDescription from "../components/FoodDescription/FoodDescription";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Review from "../components/Review/Review";

export default function Home() {
  return (
    <>
      <Hero />
      <FoodDescription />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}
