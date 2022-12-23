import { Button} from "@mui/material";
import React from "react";
import PersonalSidebarLayout from "../../../Components/Layout/PersonalAreaLayout";
import profileImg from "./assets/profile.png";
import SettingsProfileForm from "./SettingsProfileForm";

type Props = {};

function Profile({}: Props) {
  return (
    <PersonalSidebarLayout>
      <SettingsProfileForm/>
    </PersonalSidebarLayout>
  );
}

export default Profile;
