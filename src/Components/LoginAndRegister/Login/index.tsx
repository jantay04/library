import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import ModalHeading from "../ModalHeading";
import TextField from "@mui/material/TextField/TextField";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { Link } from "react-router-dom";

type Props = {
  setFormType: any;
};

interface MyFormValues {
  login: string;
  password: string;
}

function Login({ setFormType }: Props) {
  const initialValues: MyFormValues = {
    login: "",
    password: "",
  };

  function setFormRegister() {
    setFormType("register");
  }

  function setFormResetPassword() {
    setFormType("resetPassword");
  }

  return (
    <div className="w-[320px] pb-[150px]">
      <ModalHeading>Войти</ModalHeading>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          // console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          // actions.setSubmitting(false);
        }}>
        <Form className="flex gap-[10px] flex-col mt-11">
          <TextField
            id="mail"
            label="Введите почту"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <TextField
            id="password"
            label="Введите пароль"
            variant="outlined"
            color="secondary"
            size="small"
            type="password"
          />
          <p
            onClick={setFormResetPassword}
            className="text-xs text-right underline cursor-pointer text-[#8E949A]">
            Забыли пароль
          </p>
          <Link to="/personalarea" className="w-full">
            <Button
              fullWidth
              type="submit"
              color="secondary"
              variant="contained"
              size="large"
              sx={{ textTransform: "capitalize", borderRadius: 2 }}>
              Войти
            </Button>
          </Link>
          <p className="text-xs text-center  uppercase text-[#8E949A]">Или</p>
          <Button
            onClick={setFormRegister}
            className="rounded-lg"
            color="secondary"
            variant="outlined"
            size="large"
            sx={{ textTransform: "capitalize", borderRadius: 2 }}>
            Зарегистрироваться
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
