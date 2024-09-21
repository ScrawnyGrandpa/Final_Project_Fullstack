import Header from "./Header";
import Footer from "./Footer";
import MainBody from "./MainBody";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <MainBody>
                {children}
            </MainBody>
            <Footer />
        </>
    );
}