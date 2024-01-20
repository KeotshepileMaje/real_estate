import Companies from "@/components/companies/companies";
import GetStarted from "@/components/getStarted/getStarted";
import Hero from "@/components/hero/hero";
import Residencies from "@/components/residencies/residencies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <Residencies />
      <GetStarted />
    </div>
  )
}