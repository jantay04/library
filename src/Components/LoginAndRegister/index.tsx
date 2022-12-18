import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';

type Props = {}

function LoginAndRegister({}: Props) {
  const [formType, setFormType] = useState<"login" | "register" | "resetPassword">("login");


  return (
    <>
      {formType == "login" && <Login setFormType={setFormType} />}
      {formType == "register" && <Register setFormType={setFormType} />}
      {formType == "resetPassword" && <ResetPassword setFormType={setFormType} />}
    </>
  )
}

export default LoginAndRegister