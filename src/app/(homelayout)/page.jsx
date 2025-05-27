import Faq from "@/components/home/faq/FAQ";
import Gallery from "@/components/home/gallery/Gallery";
import Message from "@/components/home/message/Message";
import Services from "@/components/home/services/Services";
import Slider from "@/components/home/slider/Slider";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import Header from "@/components/shared/Header";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Message></Message>
      <WhyChooseUs></WhyChooseUs>
      <Gallery></Gallery>
      <Faq></Faq>
    </div>
  );
};

export default HomePage;
