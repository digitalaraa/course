import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceWizard = () => {
  const [step, setStep] = useState(1);
  const [userChoice, setUserChoice] = useState('');
  const navigate = useNavigate();

  const handleNext = (choice) => {
    setUserChoice(choice);
    setStep(2);
  };

  const handleExplore = () => {
    if (userChoice === 'learn') {
      navigate('/courses');
    } else if (userChoice === 'hire') {
      navigate('/web-services');
    }
  };

  return (
    <div className="service-wizard">
      {step === 1 && (
        <div>
          <h2>What Are You Looking For?</h2>
          <button onClick={() => handleNext('learn')} className="btn btn-secondary">
            I Want to Learn New Skills
          </button>
          <button onClick={() => handleNext('hire')} className="btn btn-secondary">
            I Need Professional Help for My Project
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Great Choice!</h2>
          <p>
            {userChoice === 'learn'
              ? 'Check out our courses to learn new skills and advance your career.'
              : 'Let us handle your project with our professional web services.'}
          </p>
          <button onClick={handleExplore} className="btn btn-primary">
            {userChoice === 'learn' ? 'Explore Courses' : 'Explore Services'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceWizard;