import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

`;

const TabletDesktopView = styled.div`
  @media (min-width: 600px) {
    display: flex;
    margin-top: 2rem;
    flex-direction: row;
    align-items: center;
    background-color: rgba(90, 102, 138, 0.5);
    border-radius: 100vw;
    padding: 0.5rem;
    outline: ${({ isError }) => (isError ? "2px solid var(--red)" : "none")};
  }

  @media (min-width: 1100px) {
    max-width: 70%;
    padding: 0.25rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 100vw;
  border: none;
  background-color: rgba(90, 102, 138, 0.5);
  color: var(--white);
  outline: ${({ isError }) => (isError ? "2px solid var(--red)" : "none")};

  &::placeholder {
    color: var(--blue-300);
  }

  @media (min-width: 600px) {
    margin-bottom: 0;
    background-color: transparent;
    padding: 0 0 0 1rem;
    border-radius: 0;
    outline: none;
  }


`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 100vw;
  border: none;
  background-color: var(--green);
  color: var(--blue-950);
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 600px) {
    margin-left: 2rem;
    padding: 0.75rem;
  }

  @media (min-width: 1100px) {
    padding: 0.75rem;
  }
`;

const Error = styled.p`
  color: var(--red);
  margin-top: 0.5rem;

  @media (min-width: 600px) {
    margin-left: 1.5rem;
  }

  @media (min-width: 1100px) {
   position: absolute;
   bottom: -2rem;
  }
`;

function Form() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  function isValidEmail(email) {
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValidEmail(e.target[0].value)) {
      setIsError(false);
    } else {
      setIsError(true);
      return;
    }

    setEmail("");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TabletDesktopView isError={isError}>
        <Input
          type="text"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          isError={isError}
          required
        />
        <Button type="submit">Request Access</Button>
      </TabletDesktopView>
      {isError && <Error>Oops! Please check your email</Error>}
    </StyledForm>
  );
}

export default Form;
