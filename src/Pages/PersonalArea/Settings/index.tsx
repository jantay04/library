import React from 'react'
import PersonalSidebarLayout from '../../../Components/Layout/PersonalAreaLayout'
import SettingsProfileForm from '../Profile/SettingsProfileForm'

type Props = {}

function Settings({ }: Props) {
    return (
        <PersonalSidebarLayout>
           <SettingsProfileForm/>
        </PersonalSidebarLayout>
    )
}

export default Settings