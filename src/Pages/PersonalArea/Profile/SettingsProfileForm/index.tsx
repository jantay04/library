import { TextField, Button } from "@mui/material";
import React from "react";
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

type Props = {};

const INITIAL_FORM_STATE = {};

const FORM_VALIDATION = Yup.object().shape({

})

function SettingsProfileForm({ }: Props) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <h2 className="text-[18px] font-semibold text-[#1D324E]">Личная информация</h2>
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
              color="secondary"
              size="small"
            />
          </Formik>

          <TextField
            id="outlined-basic"
            label="Фамилия"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Почта"
            variant="outlined"
            size="small"
            color="secondary"
            error
            helperText="Ведите правильно"
          />
          <TextField
            id="outlined-basic"
            label="Номер телефона"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <TextField
            id="filled-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            color="secondary"
            variant="outlined"
            size="small"
          />
          <TextField
            id="filled-password-input"
            label="Повторите пароль"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Button color="secondary" variant="outlined" size='large' sx={{ textTransform: "capitalize" }}>
            Отменить
          </Button>
          <Button color="secondary" variant="contained" size='large' sx={{ textTransform: "capitalize" }}>
            Сохранить изменения
          </Button>
        </div>
      </div>
      <div className="flex  gap-6 mt-10">

      </div>
    </div>
  );
}

export default SettingsProfileForm;
