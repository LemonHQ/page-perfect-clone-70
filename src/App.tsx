import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import OurModel from "./pages/OurModel";
import DedicatedTeam from "./pages/DedicatedTeam";
import TeamExtension from "./pages/TeamExtension";
import OffshoreCenter from "./pages/OffshoreCenter";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import MarTech from "./pages/MarTech";
import FinancialSoftware from "./pages/FinancialSoftware";
import RetailEcommerce from "./pages/RetailEcommerce";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/our-model" element={<OurModel />} />
              <Route path="/dedicated-team" element={<DedicatedTeam />} />
              <Route path="/team-extension" element={<TeamExtension />} />
              <Route path="/offshore-centre" element={<OffshoreCenter />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/martech" element={<MarTech />} />
              <Route path="/financial-software" element={<FinancialSoftware />} />
              <Route path="/retail-ecommerce" element={<RetailEcommerce />} />
              <Route path="/news" element={<News />} />
              <Route path="/faq" element={<FAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
