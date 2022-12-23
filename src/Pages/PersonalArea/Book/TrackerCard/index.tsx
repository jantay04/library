import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Checkbox } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'
import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'

type Props = {
    id: number,
    tittle: string,
    month: number,
    trackerList: Array<{
        id: number;
        tracker: boolean;
    }>
}

type CheckboxTrackerProps = {
    id: number,
    tracker: boolean
}

const monthList = [
    {
        id: 1,
        tittle: 'Январь',
    },
    {
        id: 2,
        tittle: 'Февраль',
    },
    {
        id: 3,
        tittle: 'Март',
    },
    {
        id: 4,
        tittle: 'Апрель',
    },
    {
        id: 5,
        tittle: 'Май',
    },
    {
        id: 6,
        tittle: 'Июнь',
    },
    {
        id: 7,
        tittle: 'Июль',
    },
    {
        id: 8,
        tittle: 'Август',
    },
    {
        id: 9,
        tittle: 'Сентябрь',
    },
    {
        id: 10,
        tittle: 'Октябрь',
    },
    {
        id: 11,
        tittle: 'Ноябрь',
    },
    {
        id: 12,
        tittle: 'Декабрь',
    }
]



function TrackerCard({ id, tittle, month, trackerList }: Props) {
    const [month2, setMonth] = useState(month)
    const [tittle2, setTittle] = useState(tittle)

    const handleMonthChange = (event: any) => {
        setMonth(event.target.value);
    };

    const handleTittleChange = (event: any) => {
        setTittle(event.target.value);
    };



    const CheckboxTracker = ({id, tracker }: CheckboxTrackerProps) => {
        const [checked, setChecked] = useState(tracker);
        const handleChangeChecked = (e: any) => {
            setChecked(e.target.checked)
        };
        return (
            <>
                <Checkbox
                    checked={checked}
                    onChange={handleChangeChecked}
                    color="secondary"
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            </>
        )
    }

    return (
        <div className='p-4 border-2 border-[#FF7F2C] rounded-lg min-w-[300px] '>
            <div className='px-2'>
                <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Название книги"
                    multiline
                    value={tittle2}
                    onChange={handleTittleChange}
                    color="secondary"
                    variant="standard"
                    size='small'
                />
            </div>
            <div className='px-2 mt-2'>
                <FormControl fullWidth color="secondary">
                    <InputLabel id="demo-simple-select-label" variant="standard" color="secondary" >Месяц</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={month2}
                        label="Месяц"
                        onChange={handleMonthChange}
                        variant="standard"
                        color="secondary"
                        size='small'
                    >
                        {monthList.map((item) =>
                            <MenuItem value={item.id} color="secondary">{item.tittle}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
            <div>
                <div className='flex justify-between px-2 mt-2'>

                </div>
                <div className='grid grid-cols-7 gap-1'>
                    {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "Сб", "ВС"].map((item) =>
                        <div className='text-xs font-medium flex justify-center items-center'>{item}</div>
                    )}
                    {trackerList.map((item) =>
                        <CheckboxTracker id={item.id} tracker={item.tracker} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default TrackerCard