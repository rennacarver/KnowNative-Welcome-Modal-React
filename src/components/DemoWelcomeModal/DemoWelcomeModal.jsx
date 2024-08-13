import React, { useState, useEffect, useRef } from 'react';
import './DemoWelcomeModal.css';
import Modal from '../Modal/Modal';

const initialDemoWelcomeModalData = {
  email: '',
  digestType: 'weekly',
};

const DemoWelcomeModal = ({ onSubmit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [formState, setFormState] = useState(initialDemoWelcomeModalData);

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    setFormState(initialDemoWelcomeModalData);
  };

  return (
    <Modal hasCloseBtn={false} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        
      {/* <!--Welcome Modal Page 1--> */}

        <div className="dialog-padding page-one">
            <div className="progress-div">
                <div className="progress-dashes active"></div>
                <div className="progress-dashes inactive"></div>
                <div className="progress-dashes inactive"></div>
            </div>
            <h1>Welcome to KnowNative!</h1>
            <p>KnowNative can help you read and study texts written in Mandarin Chinese.</p>
            <p>We'll help you choose a <span className="bolded">sample text</span> for this demo based on your language level. In the full version of KnowNative, you can use any text you like.</p>
            <div className="button-div">
                <button className="dialog-two next" autofocus>Next</button>
            </div>
        </div>

        {/* <!--Welcome Modal Page 2--> */}

        <div className="dialog-padding page-two">
            <div className="progress-div">
                <div className="progress-dashes active"></div>
                <div className="progress-dashes active"></div>
                <div className="progress-dashes inactive"></div>
            </div>
            <h1>Choose your level</h1>
            <p>How would you describe your proficiency in Mandarin Chinese?</p>
            <form>
                <label for="beginnerRadioButton">
                    <div className="radio-div beginner-div">
                        <input type="radio" value="beginner" name="text-choice" id="beginnerRadioButton" checked />
                        <h3>Beginner</h3>
                        <span>TOCFL 1-2</span>
                        <p>You can understand and use simple words and phrases.</p>
                    </div>
                </label>

                <label for="intermediateRadioButton">
                    <div className="radio-div intermediate-div">
                        <input type="radio" value="intermediate" name="text-choice" id="intermediateRadioButton" />
                        <h3>Intermediate</h3>
                        <span>TOCFL 3-4</span>
                        <p>You can conduct basic communication in daily life, study, and work. You can manage most communication when traveling in China.</p>
                    </div>
                </label>

                <label for="advancedRadioButton">
                    <div className="radio-div advanced-div">
                        <input type="radio" value="advanced" name="text-choice" id="advancedRadioButton" />
                        <h3>Advanced</h3>
                        <span>TOCFL 5-6</span>
                        <p>You can read Chinese newspapers and magazines, watch Chinese films and TV shows, and can write and deliver a full speech.</p>
                    </div>
                </label>
            </form>
            <div className="button-div">
                <button className="dialog-three next" autofocus>Next</button>
                <button className="dialog-one back" autofocus>Back</button>
            </div>
        </div>

        {/* <!--Welcome Modal 3--> */}
    
        <div className="dialog-padding page-three">
            <div className="progress-div">
                <div className="progress-dashes active"></div>
                <div className="progress-dashes active"></div>
                <div className="progress-dashes active"></div>
            </div>
            <h1>Great!</h1>
            <p>Let's get started with a <span id="textChoice" className="bolded">beginner</span>-level text.</p>
            <p>You can choose a different text at any time using the Library icon in the left toolbar.</p>
            <div className="button-div">
                <button type="submit" className="exit next" autofocus>Let's go!</button>
                <button className="dialog-two-from-three back" autofocus>Back</button>
            </div>
        </div>
      </form>
    </Modal>
  );
};

export default DemoWelcomeModal;


{/* <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            ref={focusInputRef}
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="digestType">Digest Type</label>
          <select
            id="digestType"
            name="digestType"
            value={formState.digestType}
            onChange={handleInputChange}
            required
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div> */}