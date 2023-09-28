import '../../app/globals.css'
import Header from "@/pages/website/components/Header";
import Footer from "@/pages/website/components/Footer";
import Features from "@/pages/website/components/Features";
import WebsiteLayout from "@/pages/website/layout";

export default function FeaturesPage() {
  return (
    <WebsiteLayout>
      <Header/>
      <Features/>
      <Footer/>
    </WebsiteLayout>
  )
}
