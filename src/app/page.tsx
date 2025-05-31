import HomeImage from "@/sections/Home/home";
import Navbar from "@/components/Navbar/navbar";
import AboutUs from "@/sections/AboutUs/AboutUs";
import Services from "@/sections/Services/services";
import Information from "@/sections/Info/info";
import WorkWithUs from "@/sections/WorkWithUs.tsx/WorkWithUs";
import ContactUs from "@/sections/ContactUs/ContactUs";
import Footer from "@/sections/Footer/footer";

export default function Home() {
  return (
    <div >
      <Navbar />
      <HomeImage />
      <AboutUs />
      <Services />
      <Information />
      <WorkWithUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
