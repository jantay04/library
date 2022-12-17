import React, { useEffect, useState } from "react";
import style from "../../Styles/Login.module.scss";

//?MUI
import { useAuth } from "../../Components/Contexts/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //?MUI

  //?CUSTOM
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //!DIRTY
  const [emailDirty, setEmailDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);
  //ERROR
  const [emailError, setEmailError] = useState("Empty Email !" && false);
  const [passError, setPassError] = useState("Empty Password !");

  const [formValid, setFormValid] = useState(false);

  const { LoginUser } = useAuth();

  const blurHandler = e => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;

      case "password":
        setPassDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (passError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [passError, emailError]);

  //? function for checking  correct input symbols

  function handleEmail(e) {
    setEmail(e.target.value);

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неправильный ввод!");
      if (!e.target.value) {
        setEmailError("Пустой email");
      }
    } else {
      setEmailError();
    }
  }

  function handlePassword(e) {
    setPass(e.target.value);

    if (e.target.value.length < 4 || e.target.value.length > 10) {
      setPassError("Пароль не должен быть  < 4 и > 10 !");
      if (!e.target.value) {
        setPassError("Пустой пароль");
      }
    } else {
      setPassError();
    }
  }

  //? Function for creatingFormdata fot Login

  function createUserForLogin() {
    let formData = new FormData();
    formData.append("someClassemailBackend", email);
    formData.append("someClassPasswordBackend", pass);
    LoginUser(formData, email);
  }

  const navigate = useNavigate();

  return (
    <div className={style.parent}>
      <div className={style.container}>
        <h1>Вход</h1>
        <div className={style.input_block}>
          <div>
            <label>{emailDirty && emailError ? emailError : null}</label>
          </div>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Введите почту"
            onChange={e => handleEmail(e)}
            onBlur={e => blurHandler(e)}
            style={emailDirty && emailError ? { border: "2px solid red" } : {}}
          />
          <div>
            <label>{passDirty && passError ? passError : null}</label>
          </div>
          <input
            value={pass}
            name="password"
            type="password"
            onChange={e => handlePassword(e)}
            onBlur={e => blurHandler(e)}
            placeholder="Введите пароль"
            style={passDirty && passError ? { border: "2px solid red" } : {}}
          />
          <div className={style.forgotPassword_block}>
            <Link to="#">Забыли пароль?</Link>
          </div>
          <button
            disabled={!formValid}
            style={formValid ? {} : { opacity: "0.5", cursor: "not-allowed" }}
            onClick={() => createUserForLogin()}>
            Войти
          </button>
        </div>
        <div className={style.block2}>
          <p>или</p>
          <button
            className={style.footer_button}
            onClick={() => navigate("/register")}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
