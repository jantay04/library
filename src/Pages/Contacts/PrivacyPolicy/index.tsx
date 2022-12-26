import React from "react";
import MainLayout from "../../../Components/Layout/MainLayout";
import BreadCrumb from "../../../Components/BreadCrumb";

type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-4">
        <BreadCrumb />
        <div className="text-ourBlue text-lg">
          <h1 className="font-bold mt-8">Политика конфиденциальности</h1>
          <p className="font-medium mt-5">
            На этом сайте можно бесплатно читать, скачивать, а также обсуждать с
            другими участниками книги.
          </p>
          <p className="font-medium mt-5">
            Библиотека действует по принципу вики. Это означает, что добавление
            книг и любой другой информации производится пользователями, иногда
            администрацией.
          </p>
          <p className="font-medium mt-5">
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.{" "}
          </p>{" "}
          <p className="font-medium my-5">
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.
            Таким образом, внедрение современных методик предопределяет высокую
            востребованность дальнейших направлений развития. Не следует,
            однако, забывать, что повышение уровня гражданского сознания, в
            своём классическом представлении, допускает внедрение как
            самодостаточных, так и внешне зависимых концептуальных решений.{" "}
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
