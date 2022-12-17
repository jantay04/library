import { TextField, Button } from "@mui/material";
import React from "react";
import * as Yup from 'yup'
import {Formik, Form} from 'formik'

type Props = {};

const INITIAL_FORM_STATE = {};

const FORM_VALIDATION = Yup.object().shape({

})

function SettingsProfileForm({}: Props) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <h2>Личная информация</h2>
        </div>
        <div className="col-span-5 grid grid-cols-2 gap-5">
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
              console.log(values)
            }}
          >
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              size="small"
            />
          </Formik>

          <TextField
            id="outlined-basic"
            label="Фамилия"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Почта"
            variant="outlined"
            size="small"
            error
            helperText="Ведите правильно"
          />
          <TextField
            id="outlined-basic"
            label="Номер телефона"
            variant="outlined"
            size="small"
          />
          <TextField
            id="filled-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="filled-password-input"
            label="Повторите пароль"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
      </div>
      <div className="flex  gap-6 mt-10">
        <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
          Отменить
        </Button>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Сохранить изменения
        </Button>
      </div>
    </div>
  );
}

export default SettingsProfileForm;
