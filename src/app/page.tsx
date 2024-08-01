import Head from "next/head";
import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Video from "./_components/VideoSection";
import Spacer from "./_components/Spacer";
import Customer from "./_components/Customers";
import FeatureSection from "./_components/FeatureSection";
import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";
import HowItWorks from "./_components/HowItWorks";
import Faqs from "./_components/Faqs";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Team::GPT - Intuitive GPT chat for your whole company</title>
        <meta name="description" content="Team-GPT guarantees ChatGPT adoption for teams between 2 and 20,000 people." />
      </Head>
      <div className="bg-[#0d2327]" >
        <Header />
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
        {/* <Pricing /> */}
      </div>
      <div className="bg-[#F8F8FF]">
        <HowItWorks />
        <Faqs />
      </div>
      <Footer />
    </>
  );
}
