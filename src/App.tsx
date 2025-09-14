import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioDevelopment from "./pages/PortfolioDevelopment";
import PortfolioOperations from "./pages/PortfolioOperations";
import AgileCoaching from "./pages/AgileCoaching";
import ProductRecovery from "./pages/ProductRecovery";
import OurApproach from "./pages/OurApproach";
import Insights from "./pages/Insights";
import AgileTransformation from "./pages/articles/AgileTransformation";
import DigitalTransformationArticle from "./pages/articles/DigitalTransformationArticle";
import TeamPerformance from "./pages/articles/TeamPerformance";
import PortfolioManagement from "./pages/articles/PortfolioManagement";
import AgileCoachingROI from "./pages/articles/AgileCoachingROI";
import DevOpsIntegration from "./pages/articles/DevOpsIntegration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio-development" element={<PortfolioDevelopment />} />
            <Route path="/portfolio-operations" element={<PortfolioOperations />} />
            <Route path="/agile-coaching" element={<AgileCoaching />} />
            <Route path="/product-recovery" element={<ProductRecovery />} />
            <Route path="/our-approach" element={<OurApproach />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/agile-transformation" element={<AgileTransformation />} />
            <Route path="/insights/digital-transformation-signs" element={<DigitalTransformationArticle />} />
            <Route path="/insights/building-high-performance-teams" element={<TeamPerformance />} />
            <Route path="/insights/portfolio-management-rapid-change" element={<PortfolioManagement />} />
            <Route path="/insights/agile-coaching-roi" element={<AgileCoachingROI />} />
            <Route path="/insights/devops-integration-strategies" element={<DevOpsIntegration />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
</HelmetProvider>
);

export default App;
