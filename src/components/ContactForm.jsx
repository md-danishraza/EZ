import React, { useState, useEffect } from "react";

import {
  FormWrapper,
  TextWrapper,
  StyledForm,
  InputGroup,
  StyledInput,
  StyledTextArea,
  SubmitButton,
  FooterText,
  ErrorMessage,
  Toast,
  Spinner, // CSS spinner
} from "../styles/ContactForm";

const initialState = { name: "", email: "", phone: "", message: "" };

function ContactForm() {
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //   custom toast
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // --- Toast Timeout Effect ---
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 3000); // Hide toast after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // --- Validation Function ---
  const validate = () => {
    let tempErrors = {};
    // Name validation
    if (!inputs.name.trim()) {
      tempErrors.name = "Name is required.";
    }
    // Email validation
    if (!inputs.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      tempErrors.email = "Email is invalid.";
    }
    // Phone validation
    if (!inputs.phone.trim()) {
      tempErrors.phone = "Phone is required.";
    } else if (!/^\d{10}$/.test(inputs.phone)) {
      tempErrors.phone = "Phone must be exactly 10 digits.";
    }
    // Message validation
    if (!inputs.message.trim()) {
      tempErrors.message = "Message is required.";
    }

    setErrors(tempErrors);
    // Return true if there are no errors, false otherwise
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));

    // Clearing the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    // preventing default behaviour
    e.preventDefault();
    setToast({ show: false }); // Hide any old toasts

    // Validate inputs
    if (!validate()) {
      return;
    }

    // Set loading state
    setIsLoading(true);
    setErrors({}); // Clear all errors

    // console.log(inputs);
    // 3. --- Mock API Call ---
    // Replace this with your actual axios.post
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Mock a 70% success rate
    const isSuccess = Math.random() > 0.3;
    // -----------------------

    setIsLoading(false);

    if (isSuccess) {
      // Handle Success
      //   reset input only on success
      setInputs(initialState);
      setToast({
        show: true,
        message: "Message sent successfully!",
        type: "success",
      });
    } else {
      // Handle Failure
      setToast({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <FormWrapper>
      <TextWrapper>
        <h2>Join the Story</h2>
        <p>Ready to bring your vision to life? Let’s talk.</p>
      </TextWrapper>

      <StyledForm onSubmit={handleSubmit} noValidate>
        {/* --- Name Input --- */}
        <InputGroup>
          <StyledInput
            type="text"
            name="name"
            placeholder="Your name*"
            value={inputs.name}
            onChange={handleChange}
            // getting boolean using !!
            $hasError={!!errors.name} // Pass error state as a prop
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </InputGroup>

        {/* --- Email Input --- */}
        <InputGroup>
          <StyledInput
            type="email"
            name="email"
            placeholder="Your email*"
            value={inputs.email}
            onChange={handleChange}
            $hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>

        {/* --- Phone Input --- */}
        <InputGroup>
          <StyledInput
            type="tel" //  "tel" for phone numbers
            name="phone"
            placeholder="Phone*"
            value={inputs.phone}
            onChange={handleChange}
            $hasError={!!errors.phone}
            maxLength="10"
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </InputGroup>

        {/* --- Message Input --- */}
        <InputGroup>
          <StyledTextArea
            name="message"
            rows={5}
            placeholder="Your message*"
            value={inputs.message}
            onChange={handleChange}
            $hasError={!!errors.message}
          ></StyledTextArea>
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </InputGroup>

        {/* --- Submit Button --- */}
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Submit"}
        </SubmitButton>
      </StyledForm>

      <FooterText>vernita@varnanfilms.co.in | +91 98736 84567</FooterText>

      {/* --- Toast Notification --- */}
      {/* show = 1 or 0 , type = succuss or failure */}
      <Toast $show={toast.show} $type={toast.type}>
        {toast.message}
      </Toast>
    </FormWrapper>
  );
}

export default ContactForm;
