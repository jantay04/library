import { Button} from "@mui/material";
import React from "react";
import PersonalSidebarLayout from "../../../Components/PersonalAreaLayout";
import profileImg from "./assets/profile.png";
import ProfileForm from "./SettingsProfileForm";

type Props = {};

function Profile({}: Props) {
  const [settingsVisible, setSettingsVisible] = React.useState(true);

  return (
    <PersonalSidebarLayout>
      <ProfileForm/>
    </PersonalSidebarLayout>
  );
}

export default Profile;
