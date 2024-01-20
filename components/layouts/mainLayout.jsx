import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function MainLayout({children}) {
    return (
        <div className='App'>
            <Header />
            <div className="white-gradient" />
            {children}
            <Footer />
        </div>
    )
}