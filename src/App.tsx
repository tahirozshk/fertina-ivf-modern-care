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
import About from "./pages/About";
import Team from "./pages/Team";
import Center from "./pages/Center";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TeseService from "./pages/services/TeseService";
import LaparoscopyService from "./pages/services/LaparoscopyService";
import NGSService from "./pages/services/NGSService";
import PregnancyFollowUpService from "./pages/services/PregnancyFollowUpService";
import DeliveryService from "./pages/services/DeliveryService";
import CervicalCerclageService from "./pages/services/CervicalCerclageService";
import PGDService from "./pages/services/PGDService";
import SingleGeneAnalysisService from "./pages/services/SingleGeneAnalysisService";
import WESService from "./pages/services/WESService";
import GeneticsService from "./pages/services/GeneticsService";
import InitialFertilityTestsService from "./pages/services/InitialFertilityTestsService";
import HysteroscopyService from "./pages/services/HysteroscopyService";
import EmbryoFreezingService from "./pages/services/EmbryoFreezingService";
import SpermFreezingService from "./pages/services/SpermFreezingService";
import EggFreezingService from "./pages/services/EggFreezingService";
import MedicalServices from "./pages/MedicalServices";

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
          <Route path="/tibbi-hizmetler" element={<MedicalServices />} />
          <Route path="/medical-services" element={<MedicalServices />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/center" element={<Center />} />
          <Route path="/merkezimiz" element={<Center />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tibbi-hizmetler/sperm-elde-etme" element={<TeseService />} />
          <Route path="/medical-services/sperm-retrieval" element={<TeseService />} />
          <Route path="/tibbi-hizmetler/laparoskopi" element={<LaparoscopyService />} />
          <Route path="/medical-services/laparoscopy" element={<LaparoscopyService />} />
          <Route path="/tibbi-hizmetler/yeni-nesil-dizileme" element={<NGSService />} />
          <Route path="/medical-services/next-generation-sequencing" element={<NGSService />} />
          <Route path="/tibbi-hizmetler/gebelik-takibi" element={<PregnancyFollowUpService />} />
          <Route path="/medical-services/pregnancy-follow-up" element={<PregnancyFollowUpService />} />
          <Route path="/tibbi-hizmetler/dogum" element={<DeliveryService />} />
          <Route path="/medical-services/delivery" element={<DeliveryService />} />
          <Route path="/tibbi-hizmetler/servikal-serklaj" element={<CervicalCerclageService />} />
          <Route path="/medical-services/cervical-cerclage" element={<CervicalCerclageService />} />
          <Route path="/tibbi-hizmetler/pgd" element={<PGDService />} />
          <Route path="/medical-services/pgd" element={<PGDService />} />
          <Route path="/tibbi-hizmetler/tek-gen-analizi" element={<SingleGeneAnalysisService />} />
          <Route path="/medical-services/single-gene-analysis" element={<SingleGeneAnalysisService />} />
          <Route path="/tibbi-hizmetler/tum-ekzom-dizilemesi" element={<WESService />} />
          <Route path="/medical-services/whole-exome-sequencing" element={<WESService />} />
          <Route path="/tibbi-hizmetler/genetik" element={<GeneticsService />} />
          <Route path="/medical-services/genetics" element={<GeneticsService />} />
          <Route path="/tibbi-hizmetler/ilk-dogurganlik-testleri" element={<InitialFertilityTestsService />} />
          <Route path="/medical-services/initial-fertility-tests" element={<InitialFertilityTestsService />} />
          <Route path="/tibbi-hizmetler/histeroskopi" element={<HysteroscopyService />} />
          <Route path="/medical-services/hysteroscopy" element={<HysteroscopyService />} />
          <Route path="/tibbi-hizmetler/embriyo-dondurma" element={<EmbryoFreezingService />} />
          <Route path="/medical-services/embryo-freezing" element={<EmbryoFreezingService />} />
          <Route path="/tibbi-hizmetler/sperm-dondurma" element={<SpermFreezingService />} />
          <Route path="/medical-services/sperm-freezing" element={<SpermFreezingService />} />
          <Route path="/tibbi-hizmetler/yumurta-dondurma" element={<EggFreezingService />} />
          <Route path="/medical-services/egg-freezing" element={<EggFreezingService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
