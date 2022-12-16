import React from "react";
import "../../style/ResetPasswordStyle.css";

const ResetPassword = () => {
  return (
    <>
      <div className="resetBlock_main">
        <h3 className="resetBlock_title">Сброс Пароля</h3>
        <input
          className="resetBlock_inp inputLogin"
          type="text"
          placeholder="Введите логин"
        />
        <input
          className="resetBlock_inp inputPass"
          type="text"
          placeholder="Введите пароль"
        />
        <input
          className="resetBlock_inp inputConPass"
          type="text"
          placeholder="Повторите пароль"
        />
        <button className="resetBlock_btn">Подтвердить</button>
        <h6 className="resetBlock_info">
          Уже есть аккаунт?
          <a className="resetBlock_link" href="">
            Войти
          </a>
        </h6>
      </div>
    </>
  );
};

export default ResetPassword;
