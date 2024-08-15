import React, { useState } from 'react';
import DemoWelcomeModal from './components/DemoWelcomeModal/DemoWelcomeModal';
import './App.css';
import logo from './assets/KN.png';

const App = () => {
  const [isDemoWelcomeModalOpen, setDemoWelcomeModalOpen] = useState(true);
  const [DemoWelcomeModalData, setDemoWelcomeModalData] = useState(null);

  const handleCloseDemoWelcomeModal = () => {
    setDemoWelcomeModalOpen(false);
  };

  const handleWelcomeModalSubmit = (data) => {
    setDemoWelcomeModalData(data);
    handleCloseDemoWelcomeModal();
  };

  return (
    <>
      <img src={logo} alt="KN app" height="600vh"></img>

      {DemoWelcomeModalData && (
        <div className="msg-box">
          {DemoWelcomeModalData}
        </div>
      )}

      <DemoWelcomeModal
        isOpen={isDemoWelcomeModalOpen}
        onSubmit={handleWelcomeModalSubmit}
        onClose={handleCloseDemoWelcomeModal}
      />
    </>
  );
};

export default App;
