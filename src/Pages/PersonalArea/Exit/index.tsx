import Button from '@mui/material/Button/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import PersonalSidebarLayout from '../../../Components/PersonalAreaLayout'

type Props = {}

function Exit({ }: Props) {
    return (
        <PersonalSidebarLayout>
            <div className='w-full h-[80vh] flex border justify-center items-center flex-col'>
                <div className='grid gap-2 text-center'>
                    <h2 className='text-xl font-semibold'>Уже уходите?</h2>
                    <p>а мы скучаем :(</p>
                    <Link to='/'>
                        <Button color="secondary" variant="outlined" size='large' sx={{ textTransform: "capitalize" }} >
                            <p className='px-10 font-medium'>Выйти</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </PersonalSidebarLayout>
    )
}

export default Exit