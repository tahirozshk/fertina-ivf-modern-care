import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Treatments from "./pages/Treatments";
import IVFTreatment from "./pages/treatments/IVFTreatment";
import EggDonation from "./pages/treatments/EggDonation";
import SpermDonation from "./pages/treatments/SpermDonation";
import EmbryoDonation from "./pages/treatments/EmbryoDonation";
import GenderSelection from "./pages/treatments/GenderSelection";
import TandemTreatment from "./pages/treatments/TandemTreatment";
import Surrogacy from "./pages/treatments/Surrogacy";
import CytoplasmTransfer from "./pages/treatments/CytoplasmTransfer";
import Physiotherapy from "./pages/treatments/Physiotherapy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/ivf-icsi" element={<IVFTreatment />} />
          <Route path="/treatments/yumurta-donasyonu" element={<EggDonation />} />
          <Route path="/treatments/egg-donation" element={<EggDonation />} />
          <Route path="/treatments/sperm-donasyonu" element={<SpermDonation />} />
          <Route path="/treatments/sperm-donation" element={<SpermDonation />} />
          <Route path="/treatments/embriyo-donasyonu" element={<EmbryoDonation />} />
          <Route path="/treatments/embryo-donation" element={<EmbryoDonation />} />
          <Route path="/treatments/cinsiyet-secimi" element={<GenderSelection />} />
          <Route path="/treatments/gender-selection" element={<GenderSelection />} />
          <Route path="/treatments/tandem-tedavi" element={<TandemTreatment />} />
          <Route path="/treatments/tandem-treatment" element={<TandemTreatment />} />
          <Route path="/treatments/tasiyici-annelik" element={<Surrogacy />} />
          <Route path="/treatments/surrogacy" element={<Surrogacy />} />
          <Route path="/treatments/sitoplazma-transferi" element={<CytoplasmTransfer />} />
          <Route path="/treatments/cytoplasm-transfer" element={<CytoplasmTransfer />} />
          <Route path="/treatments/fizyoterapi" element={<Physiotherapy />} />
          <Route path="/treatments/physiotherapy" element={<Physiotherapy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
