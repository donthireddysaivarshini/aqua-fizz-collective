import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Andhra Goli Soda | Premium Heritage Beverage</title>
        <meta
          name="description"
          content="Experience the authentic taste of India's beloved Goli Soda. Traditional marble-topped bottles with seven unique flavours, crafted with heritage since 1872."
        />
        <meta
          name="keywords"
          content="Goli Soda, Indian soda, heritage beverage, marble bottle soda, Andhra Pradesh, traditional drinks"
        />
        <link rel="canonical" href="https://andhragolisoda.co.uk" />
        <meta
          property="og:title"
          content="Andhra Goli Soda | An Old Kind of Soda"
        />
        <meta
          property="og:description"
          content="Tradition, bottled fresh. Experience the authentic taste of India's beloved heritage beverage."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <ProductSection />
        <Footer />
        <FloatingActions />
        <CartDrawer />
      </main>
    </>
  );
};

export default Index;
