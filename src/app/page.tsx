import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import HomeClient from "./HomeClient";

export default function HomePage() {
  return (
    <main id="main-content" className="overflow-hidden" tabIndex={-1}>
      <ScrollProgress />
      <Navbar />
      <HomeClient />
      <Footer />
    </main>
  );
}
