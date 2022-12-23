import TextField from '@mui/material/TextField/TextField';
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
    name: string;
    label: string;
    readOnly?: boolean;
    standard?: boolean;
    large?: boolean;
    type?: 'password' | 'date';
}

function FormField({ name, label, type, readOnly, standard, large}: Props) {
    const { register, formState } = useFormContext()

    const dateValue = "2000-05-24"

    return (
        <>
            <TextField
                {...register(name)}
                name={name}
                size={large ? "medium" : 'small'}
                label={label}
                variant={standard ? "standard" : 'outlined'}
                color="secondary"
                error={!!formState.errors[name]?.message}
                helperText={`${formState.errors[name]?.message ? formState.errors[name]?.message : ''} `}
                fullWidth
                type={type}
                InputProps={{readOnly: readOnly}}
                defaultValue={type == 'date' ? dateValue : ''}
            />
        </>
    )
}

export default FormField