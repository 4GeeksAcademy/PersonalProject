import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import AnnouncementBar from "../components/AnnouncementBar"
// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <AnnouncementBar
                phone="+34 600 123 456"
                promo="Book here and enjoy an exclusive <strong>10% off</strong> all our pet funeral services!"
            />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}