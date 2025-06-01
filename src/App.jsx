import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailHistory from './pages/DetailHistory';
import FloatingButtons from "@/components/FloatingButtons";
import ProductSpecification from "@/components/ProductSpecification";
import OrderModules from "@/components/OrderModules";


import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Partnerships from './pages/Partnerships';
import Support from './pages/Support';
import Language from './pages/Language';
import ActivityDetail from "./pages/ActivityDetail";
import Consult from "./pages/Consult";
import ConsultSummary from './pages/ConsultSummary';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  console.log("App Loaded");
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-history" element={<DetailHistory />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/support" element={<Support />} />
        <Route path="/language" element={<Language />} />
        <Route path="/order" element={<OrderModules />} />
        <Route path="/activities/:slug" element={<ActivityDetail />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/consult-summary" element={<ConsultSummary />} />
      </Routes>
      <FloatingButtons />
      <ProductSpecification />
      <Footer />
 
    </div>
  );
}

export default App;







