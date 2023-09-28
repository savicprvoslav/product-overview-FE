import Header from "@/pages/website/components/Header";
import '../app/globals.css'
import Hero from "@/pages/website/components/Hero";
import Features from "@/pages/website/components/Features";
import Subscription from "@/pages/website/components/Subscription";
import AboutUs from "@/pages/website/components/AboutUs";
import Footer from "@/pages/website/components/Footer";
import WebsiteLayout from "@/pages/website/layout";
export default function Index(){

  return (
    <WebsiteLayout>
      <Header/>
      <Hero/>
      <Features/>
      <Subscription/>
      <AboutUs/>
      <Footer/>
    </WebsiteLayout>
  )
}

