import Header from "@/components/header/header";

export default function MainLayout({children}) {
    return (
        <div className='App'>
            <Header />
            {children}
        </div>
    )
}