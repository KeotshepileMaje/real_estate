import Header from "@/components/header/header";

export default function Layout({children}) {
    return (
        <div className='App'>
            <Header />
            {children}
        </div>
    )
}