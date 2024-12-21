import Hero from "@/components/hero";
import FreshSales from "@/components/freshsale";
import Category from "@/components/category";
import Products from "@/components/products";
import Music from "@/components/music";
import Explore from "@/components/explore";
import Futured from "@/components/feature";
import Freedelvry from "@/components/free";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Hero Section */}
      <Hero />

      {/* Fresh Sales Section */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <FreshSales />
      </div>

      {/* Category Section */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <Category />
      </div>

      {/* Products Section */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <Products />
      </div>

      {/* Music Section */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <Music />
      </div>

      {/* Explore Section */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <Explore />
      </div>

      {/* Featured Section */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <Futured />
      </div>

      {/* Free Delivery Section */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <Freedelvry />
      </div>

    </div>
  );
}
