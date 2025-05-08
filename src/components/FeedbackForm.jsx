import { useState } from 'react';

// implement form submit

function FeedbackForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted:', formData);
      alert('Thank you for your feedback!');
      setFormData({ name: '', email: '', feedback: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    // name not empty
    if (!formData.name.trim()) newErrors.name = 'Name is required.';

    // email is valid email
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    )
      newErrors.email = 'Invalid email format';

    // feedback not empty
    if (!formData.feedback.trim()) newErrors.feedback = 'Feedback is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
    <div className="feedback-section">
      <h2 className="feedback-section__title">Contact Me</h2>
      <form
        action="https://formsubmit.co/elise.hrabik@gmail.com"
        method="POST"
        className="feedback-form"
      >
        {' '}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="feedback-form__input"
          placeholder="Name"
        />
        {errors.name && <p className="feedback-form__error">{errors.name}</p>}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="feedback-form__input"
          placeholder="Email"
        />
        {errors.email && <p className="feedback-form__error">{errors.email}</p>}
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="feedback-form__textarea"
          placeholder="Message"
        />
        {errors.feedback && (
          <p className="feedback-form__error">{errors.feedback}</p>
        )}
        <button type="submit" className="feedback-form__button">
          let's talk
        </button>
      </form>
      <div className="feedback-section__vine-section">

        {/* Bottom-right vine */}
        <div className="feedback-section__vine-container feedback-section__vine-container--bottom-right">

        <svg
          className="feedback-section__vine"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5222 321.393C18.4406 279.287 64.4086 190.647 192.933 172.938C321.458 155.229 363.674 81.0827 368.717 46.2231"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            className="feedback-section__vine-path"
            fill="none"
          />
          <path
            d="M216.632 195.802C208.085 201.748 182.721 206.374 171.082 187.979C156.534 164.984 212.259 181.676 216.632 195.802Z"
            stroke="black"
            strokeWidth="5"
            strokeLinejoin="round"
            className="feedback-section__leaf-path feedback-section__leaf--4"
            fill="none"
          />
          <path
            d="M4.51454 210C0.95077 224.233 1.41061 252.35 31.7602 250.95C69.6971 249.2 7.61848 224.7 4.51454 210Z"
            stroke="black"
            strokeWidth="5"
            strokeLinejoin="round"
            className="feedback-section__leaf-path feedback-section__leaf--1"
            fill="none"
          />
          <path
            d="M109.946 142C106.389 154.823 112.749 204.583 130.941 182.361C136.104 176.055 121.304 153.036 109.946 142Z"
            stroke="black"
            strokeWidth="5"
            className="feedback-section__leaf-path feedback-section__leaf--3"
            fill="none"
          />
          <path
            d="M122.93 239.359C110.558 243.355 80.5025 244.52 77.2034 228.201C73.0796 207.801 125.38 227.301 122.93 239.359Z"
            stroke="black"
            strokeWidth="5"
            strokeLinejoin="round"
            className="feedback-section__leaf-path feedback-section__leaf--2"
            fill="none"
          />
          <path
            d="M260.975 119C247.602 121.619 232.602 126.619 228.162 148.683C221.271 182.923 260.975 142.119 260.975 119Z"
            stroke="black"
            strokeWidth="5"
            strokeLinejoin="round"
            className="feedback-section__leaf-path feedback-section__leaf--5"
            fill="none"
          />
          <path
            d="M370.89 106.62C359.253 103.004 345.513 100.134 334.575 111.134C317.601 128.205 363.173 119.929 370.89 106.62Z"
            stroke="black"
            strokeWidth="5"
            strokeLinejoin="round"
            className="feedback-section__leaf-path feedback-section__leaf--7"
            fill="none"
          />
          <path
            d="M378.185 3C369.082 11.1011 360.805 21.9548 364.583 37C370.445 60.3487 387.583 22 378.185 3Z"
            stroke="black"
            strokeWidth="5"
            strokeLinejoin="round"
            className="feedback-section__leaf-path feedback-section__leaf--9"
            fill="none"
          />
          <path
            d="M322.866 164.796C313.534 155.31 267.25 135.965 277.414 162.824C280.298 170.447 307.632 169.124 322.866 164.796Z"
            stroke="black"
            strokeWidth="5"
            className="feedback-section__leaf-path feedback-section__leaf--6"
            fill="none"
          />
          <path
            d="M344.07 47.2899C334.461 45.0633 330.631 88.9521 350.688 80.4651C356.38 78.0565 351.461 56.5633 344.07 47.2899Z"
            stroke="black"
            strokeWidth="5"
            className="feedback-section__leaf-path feedback-section__leaf--8"
            fill="none"
          />
        </svg>
        </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackForm;
