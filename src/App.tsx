import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar.tsx";
import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection.tsx";
import StatsSection from "./components/StatsSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";
import LocationSection from "./components/LocationSection.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Footer from "./components/Footer.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <LocationSection />
      <ContactForm />
      <Footer />
    </div>} />
        </Routes>
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
