import SettingsProfileForm from '../Profile/SettingsProfileForm'
import React from "react";
import small from "../";
import PersonalSidebarLayout from '../../../Components/Layout/PersonalAreaLayout'

type Props = {};

function Settings({ }: Props) {
    return (
        <PersonalSidebarLayout>
           <SettingsProfileForm/>
        </PersonalSidebarLayout>
    )
}

export default Settings;
