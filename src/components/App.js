
import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Card = ({ children }) => <div className="card">{children}</div>;

const Form = () => (
  <Card>
    <form id="info-form">
      <input type="text" id="full_name" placeholder="Full Name" />
      <input type="email" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
      <input type="password" id="password_confirmation" placeholder="Confirm Password" />
      <button type="submit">Submit</button>
    </form>
  </Card>
);

const FormRef = () => {
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== confirmation.current.value) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      full_name: fullName.current.value,
      email: email.current.value,
      password: password.current.value,
      password_confirmation: confirmation.current.value
    });
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input type="text" id="full_name" placeholder="Full Name" ref={fullName} required />
        <input type="email" id="email" placeholder="Email" ref={email} required />
        <input type="password" id="password" placeholder="Password" ref={password} required />
        <input type="password" id="password_confirmation" placeholder="Confirm Password" ref={confirmation} required />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

const FormState = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input type="text" id="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
        <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" id="password_confirmation" placeholder="Confirm Password" value={formData.password_confirmation} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link id="form-link" to="/">Form</Link>
        <Link id="form-ref-link" to="/form-ref">Form Ref</Link>
        <Link id="form-state-link" to="/form-state">Form State</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </BrowserRouter>
  );
}
