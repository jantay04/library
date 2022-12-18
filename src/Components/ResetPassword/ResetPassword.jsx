import React, { useEffect, useState } from "react";
import "../../style/ResetPasswordStyle.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContextProvider";

const ResetPassword = () => {
  const navigate = useNavigate();

  //?CUSTOM
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  //!DIRTY
  const [emailDirty, setEmailDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);
  const [passConfDirty, setPassConfDirty] = useState(false);
  //!INPUT VALIDATION ERROR
  const [emailError, setEmailError] = useState("Пустой email !" || false);
  const [passError, setPassError] = useState("Пустой пароль!" || false);
  const [passConfError, setPassConfError] = useState(
    "Пустое подтверждение пароля!" || false
  );

  const [formValid, setFormValid] = useState(false);

  const { RegisterUser } = useAuth();

  //? function for checking of users focus on input

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;

      case "password":
        setPassDirty(true);
        break;

      case "password confirm":
        setPassConfDirty(true);
        break;
    }
  };

  //? function for checking  correct input symbols

  useEffect(() => {
    if (emailError || passError || passConfError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passError, passConfError]);

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
        setPassError("Пустой пароль!");
      }
    } else {
      setPassError();
    }
  }

  function handlePassConfirm(e) {
    setPassConf(e.target.value);
    if (e.target.value !== pass) {
      setPassConfError("Пароли не совпадают!");
      if (!e.target.value) {
        setPassConfError("Пустой пароль!");
      }
    } else {
      setPassConfError();
    }
  }

  //? Function of creating FormData for submitting to Backend

  function createUser() {
    let formData = new FormData();
    formData.append("someBackenEmaildClass", email);
    formData.append("someBackendPasswordClass", pass);
    formData.append("someBackendPasswordConfClass", passConf);
    RegisterUser(formData, email);
  }

  return (
    <>
      <div className="resetBlock_main">
        <h3 className="resetBlock_title">Сброс Пароля</h3>
        <div className="input_block">
          <div>
            <label>{emailDirty && emailError ? emailError : null}</label>
          </div>
          <input
            className="resetBlock_inp inputLogin"
            type="text"
            value={email}
            name="email"
            placeholder="Введите логин"
            onChange={(e) => handleEmail(e)}
            onBlur={(e) => blurHandler(e)}
            style={emailDirty && emailError ? { border: "2px solid red" } : {}}
          />
          <div>
            <label>{passDirty && passError ? passError : null}</label>
          </div>
          <input
            className="resetBlock_inp inputPass"
            value={pass}
            name="password"
            type="password"
            placeholder="Введите пароль"
            onChange={(e) => handlePassword(e)}
            onBlur={(e) => blurHandler(e)}
            style={passDirty && passError ? { border: "2px solid red" } : {}}
          />
          <div>
            <label>
              {passConfDirty && passConfError ? passConfError : null}
            </label>
          </div>
          <input
            className="resetBlock_inp inputConPass"
            type="password"
            value={passConf}
            name="password confirm"
            placeholder="Повторите пароль"
            onChange={(e) => handlePassConfirm(e)}
            onBlur={(e) => blurHandler(e)}
            style={
              passConfDirty && passConfError ? { border: "2px solid red" } : {}
            }
          />
        </div>
        <button
          className="resetBlock_btn"
          disabled={!formValid}
          style={formValid ? {} : { opacity: "0.5", cursor: "not-allowed" }}
          onClick={() => createUser()}>
          Подтвердить
        </button>
        <h6 className="resetBlock_info">
          Уже есть аккаунт?
          <a
            onClick={() => navigate("/login")}
            className="resetBlock_link"
            href="">
            Войти
          </a>
        </h6>
      </div>
    </>
  );
};

export default ResetPassword;
