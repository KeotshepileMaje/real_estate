import Companies from "@/components/companies/companies";
import Footer from "@/components/footer/footer";
import GetStarted from "@/components/getStarted/getStarted";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Residencies from "@/components/residencies/residencies";

export default function Home() {
  return (
    <div className='App'>
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <GetStarted />
      <Footer />
    </div>
  )
}