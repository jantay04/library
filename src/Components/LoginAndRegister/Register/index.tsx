import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import ModalHeading from '../ModalHeading'
import TextField from '@mui/material/TextField/TextField';
import Button, { ButtonProps } from '@mui/material/Button/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton/IconButton';
import facebookSvg from './assets/facebook.svg'
import gmailSvg from './assets/gmail.svg'


type Props = {
  setFormType: any,
}

interface MyFormValues {
  login: string,
  password: string
}
function Register({ setFormType }: Props) {
  const initialValues: MyFormValues = {
    login: '',
    password: ''
  };

  function setFormLogin() {
    setFormType('login')
  }

  return (
    <div className='w-[320px] pb-[50px]'>
      <ModalHeading>Регистрация</ModalHeading>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          // console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          // actions.setSubmitting(false);
        }}
      >
        <Form className='flex gap-[14px] flex-col mt-5'>
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
          <TextField
            id="password2"
            label="Повторите пароль"
            variant="outlined"
            color="secondary"
            size="small"
            type="password"
          />
          <Button type="submit" color="secondary" variant="contained"  sx={{ textTransform: "capitalize", borderRadius: 2, height: '50px' }} >
            <p className='font-semibold text-base'>Зарегистрироваться</p>
          </Button>
          <p className='text-xs text-center  uppercase text-[#8E949A] mt-10'>или зарегистрируйтесь через</p>
          <div className='flex justify-center'>
            <IconButton size="large">
              <img src={gmailSvg} alt="svgIcon" />
            </IconButton>
            <IconButton size="large">
              <img src={facebookSvg} alt="svgIcon" />
            </IconButton>
          </div>
          <div className='flex justify-center'>
            <p className='text-xs text-center  text-[#8E949A]'>Уже есть аккаунт?</p>
            <p className='text-xs text-center underline cursor-pointer text-[#8E949A] ml-1' onClick={setFormLogin}>Войти</p>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Register