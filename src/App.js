// import styles from '../styles/Home.module.css'
import ContactSection from "../src/components/ContactSection/ContactSection";
import HeroSection from "../src/components/HeroSection/HeroSection";
import { ServiceSection } from "../src/components/ServiceSection/ServiceSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
}
