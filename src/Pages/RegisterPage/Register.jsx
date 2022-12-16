import React, { useEffect, useState } from "react";
import style from "../../Styles/Register.module.scss";

//?MUI

import { useAuth } from "../../Components/Contexts/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
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

  const blurHandler = e => {
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

  const navigate = useNavigate();

  return (
    <div className={style.parent}>
      <div className={style.container}>
        <h1>Регистрирация</h1>
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
          <div>
            <label>
              {passConfDirty && passConfError ? passConfError : null}
            </label>
          </div>
          <input
            type="password"
            value={passConf}
            name="password confirm"
            onChange={e => handlePassConfirm(e)}
            onBlur={e => blurHandler(e)}
            placeholder="Подтвердите пароль"
            style={
              passConfDirty && passConfError ? { border: "2px solid red" } : {}
            }
          />
          <button
            disabled={!formValid}
            style={formValid ? {} : { opacity: "0.5", cursor: "not-allowed" }}
            onClick={() => createUser()}>
            Зарегистрироваться
          </button>
        </div>
        <div className={style.block2}>
          <p>или зарегистрируйтесь через</p>
          <div className={style.icons_block}>
            <button>
              <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
            </button>
            <button className={style.button2}>
              <img src="https://seeklogo.com/images/F/facebook-icon-logo-AEF3A8F447-seeklogo.com.png" />
            </button>
          </div>
          <h5>
            Уже есть аккаунт?<Link to="/login">Войти</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Register;
