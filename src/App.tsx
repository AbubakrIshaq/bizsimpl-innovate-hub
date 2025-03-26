
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivateLimited from "./pages/PrivateLimited";
import LLP from "./pages/LLP";
import OnePersonCompany from "./pages/OnePersonCompany";
import Registration from "./pages/Registration";
import Features from "./pages/Features";
import Benefits from "./pages/Benefits";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/about/AboutUs";
import Careers from "./pages/about/Careers";
import Blog from "./pages/about/Blog";
import Press from "./pages/about/Press";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/private-limited" element={<PrivateLimited />} />
          <Route path="/llp" element={<LLP />} />
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/features" element={<Features />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
