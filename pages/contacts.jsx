import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function ContactPage() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}
