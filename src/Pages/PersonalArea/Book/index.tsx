import Button from '@mui/material/Button/Button'
import React, { useState } from 'react'
import PersonalSidebarLayout from '../../../Components/Layout/PersonalAreaLayout'
import PersonalBodyHeading from '../../../Components/UI/PersonalBodyHeading'
import TrackerCard from './TrackerCard'

type Props = {};

const TrackerCardObj = [
    {
        id: 1,
        tittle: 'Шантарам',
        month: 2,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 2,
        tittle: 'Алхимик',
        month: 6,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 3,
        tittle: 'Анна Каренина',
        month: 9,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 4,
        tittle: 'Унесенные ветром',
        month: 12,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 5,
        tittle: 'Портрет Дориана Грея',
        month: 3,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 6,
        tittle: 'Мартен Иден',
        month: 12,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 7,
        tittle: 'Граф Монте Кристо',
        month: 5,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 8,
        tittle: 'Повелитель Мух',
        month: 6,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 9,
        tittle: '451 градус по Фаренгейту',
        month: 10,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 10,
        tittle: 'Триумфальная Арка',
        month: 8,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 11,
        tittle: 'Вино из одуванчиков',
        month: 9,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
    {
        id: 12,
        tittle: 'Над пропастью во ржи',
        month: 4,
        trackerList: [
            {
                id: 1,
                tracker: true
            },
            {
                id: 2,
                tracker: false
            },
            {
                id: 3,
                tracker: true
            },
            {
                id: 4,
                tracker: true
            },
            {
                id: 5,
                tracker: true
            },
            {
                id: 6,
                tracker: true
            },
            {
                id: 7,
                tracker: true
            },
            {
                id: 9,
                tracker: true
            },
            {
                id: 10,
                tracker: true
            },
            {
                id: 11,
                tracker: true
            },
            {
                id: 12,
                tracker: true
            },
            {
                id: 13,
                tracker: false
            },
            {
                id: 14,
                tracker: true
            },
            {
                id: 15,
                tracker: false
            },
            {
                id: 16,
                tracker: true
            },
            {
                id: 17,
                tracker: true
            },
            {
                id: 18,
                tracker: true
            },
            {
                id: 19,
                tracker: true
            },
            {
                id: 20,
                tracker: true
            },
            {
                id: 21,
                tracker: false
            },
            {
                id: 22,
                tracker: true
            },
            {
                id: 23,
                tracker: true
            },
            {
                id: 24,
                tracker: false
            },
            {
                id: 25,
                tracker: true
            },
            {
                id: 26,
                tracker: true
            },
            {
                id: 27,
                tracker: false
            },
            {
                id: 28,
                tracker: true
            },
            {
                id: 29,
                tracker: false
            },
            {
                id: 30,
                tracker: true
            },
            {
                id: 31,
                tracker: false
            }
        ]
    },
]


function Book({ }: Props) {
    const [formType, setFormType] = React.useState<"starter" | "tracker" | "finished" | "">("starter");

    return (
        <PersonalSidebarLayout>
            <PersonalBodyHeading>Пройдите челлендж “Книгоман”</PersonalBodyHeading>
            {formType == 'starter' &&
                <div className='flex justify-center items-center h-full'>
                    <div className='flex flex-col items-center gap-6 -translate-y-10'>
                        <h1 className='text-[#1D324E] text-xl font-bold'>Таблица не найдена</h1>
                        <p>Вы пока не начали свой челлендж :(</p>
                        <div className='flex w-[180px]'>
                            <Button onClick={() => setFormType('tracker')} color="secondary" variant="outlined" size="large" sx={{ textTransform: "capitalize" }} fullWidth>
                                Начать
                            </Button>
                        </div>
                    </div>
                </div>
            }
            {formType == 'tracker' &&
                <>
                    <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                        {TrackerCardObj.map((item) =>
                            <TrackerCard id={item.id} tittle={item.tittle} month={item.month} trackerList={item.trackerList} />
                        )}
                    </div>
                    <div className='flex justify-center items-center mt-20 text-center'>
                        <div className='flex flex-col items-center gap-6 -translate-y-10'>
                            <h1 className='text-[#1D324E] text-xl font-bold'>Вы прошли челлендж “Книгоман”?</h1>
                            <p>Было прочтено 12 книг за 12 месяцев? :)</p>
                            <div className='flex w-[180px]'>
                                <Button onClick={() => setFormType('finished')} color="secondary" variant="contained" size="large" sx={{ textTransform: "capitalize" }} fullWidth>
                                    Пройдено
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            }
            {formType == 'finished' &&
                <div className='flex justify-center items-center h-full'>
                    <div className='flex flex-col items-center gap-6 -translate-y-10 text-center'>
                        <h1 className='text-[#1D324E] text-xl font-bold'>Поздравляем! Вы прошли челлендж “Книгоман”! </h1>
                        <p>Хотите еще? :)</p>
                        <div className='flex w-[180px]'>
                            <Button onClick={() => setFormType('tracker')} color="secondary" variant="outlined" size="large" sx={{ textTransform: "capitalize" }} fullWidth>
                                Начать
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </PersonalSidebarLayout>
    )
}

export default Book;
