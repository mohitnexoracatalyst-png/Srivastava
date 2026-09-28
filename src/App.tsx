import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InspectionBookingModal } from './components/InspectionBookingModal';
import { LegalModals } from './components/LegalModals';
import { ModalType } from './types';

// Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PlansPage } from './pages/PlansPage';
import { CommercialPage } from './pages/CommercialPage';
import { ProcessPage } from './pages/ProcessPage';
import { AnalyzerPage } from './pages/AnalyzerPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);
  const [initialService, setInitialService] = useState<string | undefined>(undefined);
  const [analysisNotes, setAnalysisNotes] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceOrPlan?: string) => {
    if (serviceOrPlan?.startsWith('plan-')) {
      setSelectedPlanId(serviceOrPlan);
      setInitialService(undefined);
    } else {
      setInitialService(serviceOrPlan);
      setSelectedPlanId(undefined);
    }
    setModalType('booking');
  };

  const handleOpenBookingWithAnalysis = (pestType: string, urgency: string, notes: string) => {
    setInitialService(pestType);
    setAnalysisNotes(`Pest Diagnostic Report: ${notes} (Urgency: ${urgency})`);
    setModalType('booking');
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F9F8] text-[#111827] antialiased">
        {/* Skip Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0F7A4A] text-white rounded-md text-xs font-semibold shadow-md"
        >
          Skip to main content
        </a>

        {/* Global Navigation Bar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Separate Multi-Page Routing */}
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/plans" element={<PlansPage onSelectPlan={handleOpenBooking} />} />
            <Route path="/commercial" element={<CommercialPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/process" element={<ProcessPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route
              path="/analyzer"
              element={<AnalyzerPage onOpenBookingWithAnalysis={handleOpenBookingWithAnalysis} />}
            />
            <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer
          onOpenBooking={() => handleOpenBooking()}
          onOpenModal={(type) => setModalType(type)}
        />

        {/* Inspection Booking Modal */}
        <InspectionBookingModal
          isOpen={modalType === 'booking'}
          onClose={() => {
            setModalType(null);
            setSelectedPlanId(undefined);
            setInitialService(undefined);
            setAnalysisNotes(undefined);
          }}
          initialPlanId={selectedPlanId}
          initialServiceOrPest={initialService}
          initialNotes={analysisNotes}
        />

        {/* Legal & Privacy Modals */}
        <LegalModals
          modalType={modalType}
          onClose={() => setModalType(null)}
        />
      </div>
    </HashRouter>
  );
}
