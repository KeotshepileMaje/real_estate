import Calculators from "@/components/calculators/calculators";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function CalculatorsPage() {
  return (
    <>
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Calculators />
      </div>
    </div>
    <Footer />
    </>
  );
}