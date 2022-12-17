import { Button} from "@mui/material";
import React from "react";
import profileImg from "./assets/profile.png";
import ProfileForm from "./SettingsProfileForm";

type Props = {};

function Profile({}: Props) {
  const [settingsVisible, setSettingsVisible] = React.useState(false);

  return (
    <div>
      {!settingsVisible && (
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <img
              src={profileImg}
              alt="profilePhoto object-cover"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Бекболот Жантаев</h2>
              <p className="font-medium">
                Возраст: <span className="font-normal">{21}</span>
              </p>
              <p className="font-medium">
                Пол:<span className="font-normal">{"Мужчина"}</span>{" "}
              </p>
              <p className="font-medium">
                Страна: <span className="font-normal">{"Кыргызстан"}</span>
              </p>
              <p className="font-medium">
                Почта:{" "}
                <span className="font-normal">{"bzantaev@gmail.com"}</span>
              </p>
              <p className="font-medium">
                Количество прочитанных книг:{" "}
                <span className="font-normal">{3}</span>
              </p>
              {/* <p>
            Для меня чтение книг - это общение с новыми друзьями, которые
            могут легко отвести от неприятностей. Ведь, если человек в
            повседневной жизни сталкивается с чередой трудностей, он легко
            может переключиться на события, которые вызовут ощущение счастья и
            гармонии. В таком случае мое настроение ничто не может омрачить.
            Книга становится защитой от внешних раздражающих факторов.
            Источник: Сочинение Почему я люблю читать книги
          </p> */}
            </div>
            <Button variant="outlined" onClick={() => setSettingsVisible(true)}>
              Редактировать профиль
            </Button>
          </div>
          <div className="col-span-6">
            <h3 className=" text-lg font-semibold">О себе</h3>
            <p>
              Для меня чтение книг - это общение с новыми друзьями, которые
              могут легко отвести от неприятностей. Ведь, если человек в
              повседневной жизни сталкивается с чередой трудностей, он легко
              может переключиться на события, которые вызовут ощущение счастья и
              гармонии. В таком случае мое настроение ничто не может омрачить.
              Книга становится защитой от внешних раздражающих факторов.
              Источник: Сочинение Почему я люблю читать книги
            </p>
          </div>
        </div>
      )}
      {settingsVisible && (
        <ProfileForm/>
      )}
    </div>
  );
}

export default Profile;
