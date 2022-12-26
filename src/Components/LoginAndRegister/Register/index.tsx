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
import FormField from '../../UI/FormField';
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';


type Props = {
  setFormType: any,
}

interface MyFormValues {
  login: string,
  password: string
}

function Register({ setFormType }: Props) {
  function setFormLogin() {
    setFormType('login')
  }

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema)
  });

  const onSubmit = () => {
    // data => console.log(data)
  };

  return (
    <div className='md:w-[320px] md:pb-[50px] h-full'>
      <ModalHeading>Регистрация</ModalHeading>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col justify-between h-[calc(100%-100px)]'>
          <div className='flex  flex-col'>
            <FormField label='Введите почту' name='email' />
            <FormField label='Введите пароль' name='password' />
            <FormField label='Повторите пароль' name='password' />
            <Button type="submit" color="secondary" variant="contained" sx={{ textTransform: "capitalize", borderRadius: 2, height: '50px' }} >
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
          </div>
          <div className='flex justify-center'>
            <p className='text-xs text-center  text-[#8E949A]'>Уже есть аккаунт?</p>
            <p className='text-xs text-center underline cursor-pointer text-[#8E949A] ml-1' onClick={setFormLogin}>Войти</p>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Register