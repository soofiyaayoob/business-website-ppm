import Navbar from "@/components/Navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Products from "@/components/product";
import Benfits from "@/components/benefits";
import Testimonials from "@/components/testomonials";
import Connect from "@/components/connect";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
export default function Main() {
  const gradientOverlay =
    "linear-gradient(291.61deg, rgba(0, 0, 0, 0.0468) 42.83%, rgba(0, 0, 0, 0.39) 52.63%)";

  const mobileBackgroundStyle = {
    backgroundImage: `${gradientOverlay}, url('/homes.webp')`,
  };

  const desktopBackgroundStyle = {
    backgroundImage: `${gradientOverlay}, url('/homeFrame.webp')`,
  };

  return (
    <div className="w-full box-border relative">
      <div className="relative">
        <div
          className="absolute inset-0  bg-center bg-cover bg-no-repeat md:hidden pointer-events-none z-0"
          style={mobileBackgroundStyle}
          aria-hidden="true"
        />
        <Navbar />

        <section className="relative ">
          <div
            className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat z-0"
            style={desktopBackgroundStyle}
            aria-hidden="true"
          />
          <Home />
        </section>
      </div>

      <About />
      <Products />
      <Benfits />
      <Testimonials />
      <Connect />
      <Faq />
      <Footer />
    </div>
  );
}
