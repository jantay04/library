import React, { useEffect, useRef, useState } from 'react'
import ModalHeading from '../ModalHeading'
import Button, { ButtonProps } from '@mui/material/Button/Button';
import { Link } from 'react-router-dom';
import mailSvg from './assets/mail.svg'
import FormField from '../../UI/FormField';
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetFormSchema } from '../../../utils/validations';

type Props = {
  setFormType: any
}

interface MyFormValues {
  login: string,
  password: string
}

function ResetPassword({ setFormType }: Props) {
  const initialValues: MyFormValues = {
    login: '',
    password: ''
  };

  function setFormRegister() {
    setFormType('register')
  }

  const [confirmation, setConfirmation] = useState(false)

  const [counter, setCounter] = useState(60);


  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter])

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = true;
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }

    if (counter == 0) {
      setCounter(60)
      setConfirmation(false)
    }

  }, [counter]);


  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(ResetFormSchema)
  });

  const onSubmit = () => {
    // data => console.log(data)
    setConfirmation(true)
  };

  return (
    <div className='md:w-[320px] pb-[150px]'>
      <ModalHeading>Восстановление доступа</ModalHeading>
      {!confirmation && (
        <>
          <p className='text-base text-center text-[#515A61]'>Забыли пароль? Введите свой адрес электронной почты и мы вышлем вам инструкцию по восстановлению пароля  </p>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col mt-11'>
              <FormField label='Введите почту' name='email' />
              <Button type="submit" color="secondary" variant="contained" sx={{ textTransform: "capitalize", borderRadius: 2, height: '50px' }} >
                <p className='font-semibold text-base'>Отправить</p>
              </Button>
            </form>
          </FormProvider>
        </>
      )}
      {confirmation && (
        <>
          <p className='text-base text-center text-[#515A61] mt-11'>Мы выслали на вашу электронную почту инструкцию по восстановлению пароля </p>
          <p className='text-base text-center text-[#515A61] mt-11'>Если письмо не пришло, убедитесь, что оно не попало в спам или вышлите повторно через {counter} секунд</p>
          <div className='flex justify-center mt-9'>
            <img src={mailSvg} alt='mailSvg' />
          </div>
        </>
      )}
    </div >
  )
}

export default ResetPassword