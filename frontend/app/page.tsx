import Navbar from "@/components/Navbar";
import Intro from "@/components/scenes/Intro";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen font-sans">
            <Navbar />
            <Intro />
            <Features />
            <Footer />
        </main>
    );
}