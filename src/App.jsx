import React, { useState } from 'react';
import DemoWelcomeModal from './components/DemoWelcomeModal/DemoWelcomeModal';
import './App.css';
import logo from './assets/KN.png';

const App = () => {
  const [isDemoWelcomeModalOpen, setDemoWelcomeModalOpen] = useState(true);
  const [newsletterFormData, setNewsletterFormData] = useState(null);

  const handleCloseDemoWelcomeModal = () => {
    setDemoWelcomeModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    setNewsletterFormData(data);
    handleCloseDemoWelcomeModal();
  };

  return (
    <>
      <img src={logo} alt="KN app" height="600vh"></img>

      {newsletterFormData && newsletterFormData.email && (
        <div className="msg-box">
          <b>{newsletterFormData.email}</b> requested a{' '}
          <b>{newsletterFormData.digestType}</b> newsletter.
        </div>
      )}

      <DemoWelcomeModal
        isOpen={isDemoWelcomeModalOpen}
        onSubmit={handleFormSubmit}
        onClose={handleCloseDemoWelcomeModal}
      />
    </>
  );
};

export default App;
