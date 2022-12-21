import React from "react";
import PersonalSidebarLayout from "../../../Components/PersonalAreaLayout";
import small from "../";

type Props = {};

function Settings({}: Props) {
  return (
    <PersonalSidebarLayout>
      <div className="bg-red-400 w-100 h-max"></div>
    </PersonalSidebarLayout>
  );
}

export default Settings;
