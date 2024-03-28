import React, { useState } from 'react';
import './SignUpForm.css'; // Ensure your CSS file is correctly named and located

const SignUpForm = ({ setIsModalOpen }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    const container = document.querySelector('.container');
    container.classList.toggle('right-panel-active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  // Stop event propagation to prevent the modal from closing when its content is clicked
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-background" onClick={() => setIsModalOpen(false)}>
      <div className="container" onClick={handleContainerClick}>
        <div className={`container__form container--signup ${isSignIn ? 'right-panel-active' : ''}`}>
          <form onSubmit={handleSubmit} className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button type="submit" className="btn">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`container__form container--signin ${isSignIn ? 'right-panel-active' : ''}`}>
          <form onSubmit={handleSubmit} className="form" id="form2">
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button type="submit" className="btn">Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="container__overlay">
          <div className="overlay">
            <div className={`overlay__panel overlay--left ${isSignIn ? 'right-panel-active' : ''}`}>
              <button className="btn" onClick={toggleForm} id="signIn">Sign In</button>
            </div>
            <div className={`overlay__panel overlay--right ${isSignIn ? 'right-panel-active' : ''}`}>
              <button className="btn" onClick={toggleForm} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
