
import Image from "next/image";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import CoachCarousel from "../components/CoachCarousel"
import HowItWorks from "../components/HowItWorks";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Join from "../components/Join";
import Table from "../components/Table";
import P from "../components/P"
import Header from "../components/Header";
import { Inter } from 'next/font/google';
import { Lato } from 'next/font/google';


const lato = Lato({
  weight: ['400', '700'],  
  subsets: ['latin'],
  variable: '--font-lato', 
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Join />
      <Table />
      <Features />
      <P />
      <HeroSection />
      <HowItWorks />
      <CoachCarousel />
      <Footer />
    </>
  );
}
