import { HashRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { CompanyPage } from "./pages/CompanyPage";
import { ServicesPage } from "./pages/ServicesPage";
import { RecruitmentPage } from "./pages/RecruitmentPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { PageTransition, CurtainTransition } from "./components/PageTransition";
import { LoadingScreen } from "./components/LoadingScreen";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (section: string) => {
    if (section === "home") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else if (section === "company") {
      navigate("/company");
    } else if (section === "services") {
      navigate("/services");
    } else if (section === "recruitment") {
      navigate("/recruitment");
    } else if (section === "contact") {
      navigate("/contact");
    } else {
      // If not on home page, go to home page first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection(section);
        }, 300);
      } else {
        scrollToSection(section);
      }
    }
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 64; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white antialiased" style={{ fontFamily: "'Manrope', 'Noto Sans JP', sans-serif" }}>
      <ScrollToTop />
      <CurtainTransition />
      <Header onNavigate={handleNavigate} />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </PageTransition>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <HashRouter>
        <AppContent />
      </HashRouter>
    </>
  );
}
