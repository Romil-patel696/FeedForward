import React, { useState } from 'react';
import './Contact.css';  // Add this line to import the CSS

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-8 col-12 mx-auto">
          <div className="card shadow-lg border-0 p-4">
            <h1 className="text-center bg-dark text-white display-4 d-inline-block"><div className='padd'>Contact us</div></h1>
            <div className="form-group my-5">
              <div className="row">
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="text"
                    className="form-control-lg"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="text"
                    className="form-control-lg"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-5">
              <div className="row">
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="email"
                    className="form-control-lg"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 col-12 mx-auto my-2">
                  <input
                    type="tel"
                    className="form-control-lg"
                    placeholder="Phone no."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-11 mx-auto">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className="mt-5 col-md-6 col-12 mx-auto">
              <button className="btn btn-outline-dark btn-lg btn-block" onClick={handleSendMessage}>
                <div >Send Message</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
