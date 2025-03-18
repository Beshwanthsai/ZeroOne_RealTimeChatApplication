import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgb(31, 63, 119) 0%,
    rgb(20, 45, 90) 100%
  );
`;

const FlipCard = styled.div`
  width: 400px;
  height: 500px;
  perspective: 1000px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "none")};
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;

const BackSide = styled(CardSide)`
  transform: rotateY(180deg);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  color: rgb(31, 63, 119);
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: rgb(31, 63, 119);
  }
`;

const Button = styled.button`
  background-color: rgb(31, 63, 119);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: rgb(31, 63, 119);
  cursor: pointer;
  margin-top: 20px;
  text-decoration: underline;
  font-size: 14px;
`;

const HomeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const SignUp = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <AuthContainer>
      <HomeButton onClick={() => navigate("/")}>← Back to Home</HomeButton>
      <FlipCard>
        <FlipCardInner isFlipped={isFlipped}>
          <CardSide>
            <Title>Welcome Back</Title>
            <Form onSubmit={handleLogin}>
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit">Login</Button>
              <LinkButton type="button" onClick={() => setIsFlipped(true)}>
                Need an account? Sign Up
              </LinkButton>
            </Form>
          </CardSide>

          <BackSide>
            <Title>Create Account</Title>
            <Form onSubmit={handleRegister}>
              <Input type="text" placeholder="Full Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Input type="password" placeholder="Confirm Password" required />
              <Button type="submit">Sign Up</Button>
              <LinkButton type="button" onClick={() => setIsFlipped(false)}>
                Already have an account? Login
              </LinkButton>
            </Form>
          </BackSide>
        </FlipCardInner>
      </FlipCard>
    </AuthContainer>
  );
};

export default SignUp;
