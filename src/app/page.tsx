import Head from "next/head";
import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Header from "./_components/Header";
import Video from "./_components/VideoSection";
import Spacer from "./_components/Spacer";
import Customer from "./_components/Customers";
import FeatureSection from "./_components/FeatureSection";
import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";
import HowItWorks from "./_components/HowItWorks";
import Faqs from "./_components/Faqs";
import Footer from "./_components/Footer";
import Feedback from "./_components/Feedback";

export default function Home() {
  return (
    <section className="w-[100vw]">
      <div className="bg-[#0d2327]" >
        <HeroSection />
        {/* <Video /> */}
      </div>
      <div className="bg-gray-100">
          <Spacer height={50} />
          <Customer />
          <FeatureSection />
          <Testimonials />
      </div>
      <div className="bg-[#052727]">
        <Pricing />
      </div>
      <div className="bg-[#F8F8FF]">
        <HowItWorks />
        <Feedback />
        <Faqs />
      </div>
      <Footer />
    </section>
  );
}
