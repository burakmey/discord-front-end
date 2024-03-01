import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Container, { FlexCol, FlexRow, Wrapper } from "../components/container/Container";
import { TextHeader, TextLabel, TextNormal, TextSpan } from "../components/text/Text";
import { ButtonLarge, ButtonLink } from "../components/button/Button";
import { InputForm } from "../components/input/Input";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import * as signalR from "@microsoft/signalr";

const CharacterBackground = styled.svg`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--background-primary-blue);
`;
const Logo = styled(Container)`
  display: none;
  width: 130px;
  height: 36px;
  background: var(--brand-experiment);
  margin: 0 0 16px;
  @media (max-width: 485px) {
    display: block;
  }
`;
const LoginForm = styled.form`
  width: 784px;
  padding: 32px;
  border-radius: 5px;
  background: var(--background-primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  color: var(--text-muted);
  @media (max-width: 830px) {
    max-width: 480px;
  }
  @media (max-width: 485px) {
    max-width: none;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 16px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 0;
  }
`;
const LoginQR = styled(FlexCol)`
  width: 240px;
  height: 344px;
  @media (max-width: 830px) {
    display: none;
  }
`;
const QRContainer = styled(FlexCol)`
  width: 176px;
  height: 176px;
  position: relative;
  margin: 0 0 32px;
  background: white;
  border-radius: 4px;
`;
function Login() {
  console.log("Login rendered!");

  const form = useForm();
  const { register, handleSubmit } = form;
  const { authData, setAuthData } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await fetch(process.env.REACT_APP_USER_LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.emailOrPhone, password: data.password }),
    }).then((response) => {
      if (response.ok)
        response.json().then((result) => {
          setAuthData(result);
          navigate("/user", { replace: true });
        });
      else response.json().then((errorMessage) => console.error(errorMessage));
    });
  };

  useEffect(() => {
    if (authData !== null) {
      navigate("/user", { replace: true });
    }
    return () => console.log("Login unmounted!");
  }, [navigate, authData]);

  return (
    <Container $styles={{ position: "relative", width: "100vw", minHeight: "100vh", overflow: "auto" }}>
      <CharacterBackground />
      <Wrapper $styles={{ minHeight: "580px" }}>
        <div>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Logo />
            <FlexRow $styles={{ gap: "66px", width: "100%" }}>
              <FlexCol $styles={{ flexGrow: 1, alignItems: "start" }}>
                <FlexCol $styles={{ width: "100%" }}>
                  <TextHeader as={"h1"} $styles={{ margin: "0 0 8px" }}>
                    Welcome back!
                  </TextHeader>
                  <TextNormal>We're so excited to see you again!</TextNormal>
                </FlexCol>
                <Container $styles={{ textAling: "left", width: "100%", margin: "20px 0 0" }}>
                  <TextLabel as={"label"} $styles={{ margin: "0 0 8px" }}>
                    Email or Phone Number
                  </TextLabel>
                  <InputForm $styles={{ margin: "0 0 20px" }} name="emailOrPhone" type="text" {...register("emailOrPhone")}></InputForm>
                  <TextLabel as={"label"} $styles={{ margin: "0 0 8px" }}>
                    Password
                  </TextLabel>
                  <InputForm name="password" type="password" {...register("password")}></InputForm>
                  <ButtonLink $styles={{ margin: "4px 0 20px", padding: "2px 0" }} type="button">
                    Forgot your password?
                  </ButtonLink>
                  <ButtonLarge $styles={{ margin: "0 0 10px" }} type="submit">
                    Log In
                  </ButtonLarge>
                  <Container>
                    <TextSpan as={"span"}>Need an account?</TextSpan>
                    <ButtonLink $styles={{ margin: "0 0 0 4px" }} type="button">
                      Register
                    </ButtonLink>
                  </Container>
                </Container>
              </FlexCol>
              <LoginQR>
                <QRContainer />
                <TextHeader as={"h1"} $styles={{ margin: "0 0 8px" }}>
                  Log in with QR Code
                </TextHeader>
                <TextNormal>
                  Scan this with the <strong>Discord mobile app</strong> to log in instantly.
                </TextNormal>
              </LoginQR>
            </FlexRow>
          </LoginForm>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Login;
