import Header from "./Header";
import Footer from "./Footer";
import MainBody from "./MainBody";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <MainBody>{children}</MainBody>
            <Footer />
        </div>
    );
}