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
      <h2 className="feedback-form__title">Contact Me</h2>
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
    </>
  );
}

export default FeedbackForm;
