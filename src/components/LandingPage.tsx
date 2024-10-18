"use client";

import Section from "../components/Section";
import Footer from "./Footer";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";

const LandingPage: React.FC = () => {
  return (
    <>
    <Header />

      <Section
        title="Welcome to the Future"
        subtitle="Empower your journey with innovation"
        thirdElement="Scroll to discover more"
        bgImage="/images/section1.jpg"
      />
      <Section
        title="Community Driven"
        subtitle="Join thousands of like-minded people"
        thirdElement="Be part of the change"
        bgImage="/images/section2.jpg"
      />
      <Section
        title="Secure and Transparent"
        subtitle="We put trust first"
        thirdElement="Learn how we build trust"
        bgImage="/images/section3.jpg"
      />
      <Footer />
      <MusicPlayer />

    </>
  );
};

export default LandingPage;
