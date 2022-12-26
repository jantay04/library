import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations'
import * as yup from "yup";
import FormField from '../../UI/FormField';
import React from "react";
import ModalHeading from "../ModalHeading";
import TextField from "@mui/material/TextField/TextField";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { Link } from "react-router-dom";

type Props = {
  setFormType: any;
};

function Login({ setFormType }: Props) {
  function setFormRegister() {
    setFormType("register");
  }

  function setFormResetPassword() {
    setFormType("resetPassword");
  }

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema)
  });
  const onSubmit = () => {
    // data => console.log(data)
  };
  
  return (
    <div className='md:w-[320px] md:pb-[150px] h-full'>
      <ModalHeading>Войти</ModalHeading>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex justify-between gap-[10px] flex-col h-[calc(100%-100px)]'>
          <div className='flex flex-col '>
            <FormField label='Почта' name='email' />
            <FormField label='Пароль' name='password' type='password' />
            <p onClick={setFormResetPassword} className='text-xs text-right underline cursor-pointer text-[#8E949A] mb-2'>Забыли пароль</p>
            <Link to='/personalarea' className='w-full' >
              <Button type='submit' fullWidth color="secondary" variant="contained" size='large' sx={{ textTransform: "capitalize", borderRadius: 2 }} >
                Войти
              </Button>
            </Link>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <p className='text-xs text-center  uppercase text-[#8E949A]'>Или</p>
            <Button onClick={setFormRegister} className='rounded-lg' variant="outlined" size='large' sx={{ textTransform: "capitalize", borderRadius: 2, color: '#1D324E', borderColor: 'gray' }}>
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default Login;
