import React from "react";
import style from "../../Styles/Footer.module.scss";

const Footer = () => {
  //НА КОМПОНЕНТ FOOTER ЕСТЬ ВРЕМЕННЫЙ ПУТЬ  => /footer

  return (
    <div className={style.parent}>
      <div className={style.block1}>
        <h3>
          <strong>Your</strong>
          <span> Books</span> - онлайн библиотека.
        </h3>
        <br />
        <p>
          На этом сайте можно бесплатно читать, скачивать, а также обсуждать с
          другими участниками книги.
        </p>
        <br />

        <p>
          Библиотека действует по принципу вики. Это означает, что добавление
          книг и любой другой информации производится пользователями, иногда
          администрацией.
        </p>
      </div>
      <div className={style.block2}>
        <ul>
          <li>Библиотека </li>
          <br />
          <li>Аудиокниги </li>
          <br />
          <li>Блог</li>
          <br />
          <li>Группы</li>
          <br />
          <li>Проекты</li>
        </ul>
      </div>
      <div className={style.block3}>
        <ul>
          Контакты:
          <li> +996 (990) 885 885</li>
          <li>+996 (990) 886 886</li>
          <li>mybooks@gmail.com</li>
        </ul>
        <div className={style.icons_block}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png" />
        </div>
      </div>
      <div className={style.block4}>
        <img
          src="https://w7.pngwing.com/pngs/490/437/png-transparent-copyright-symbol-all-rights-reserved-registered-trademark-symbol-copyright-text-trademark-words-phrases.png"
          alt="ffff"
        />
        <p>
          2022 Your books. Все права защищены | Публичная оферта | Политика
          конфиденциальности
        </p>
      </div>
    </div>
  );
};

export default Footer;
