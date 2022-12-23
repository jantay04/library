import React from 'react'
import logoSvg from '../../../assets/logo.svg'
import settingsIcon from '../assets/settings.svg'
import bookIcon from '../assets/book.svg'
import booksIcon from '../assets/books.svg'
import exitIcon from '../assets/exit.svg'
import likeIcon from '../assets/like.svg'
import personIcon from '../assets/person.svg'
import reviewIcon from '../assets/review.svg'
import { Link, useLocation } from 'react-router-dom'
type Props = {}

type NavbarLinkProps = {
    tittle: string,
    icon: string,
    url: string
}

function PersonalAreaSidebar({ }: Props) {


    const sidebarLinks = [
        {
            id: 1,
            tittle: "Профиль",
            icon: personIcon,
            url: "",
            position: 'top'
        },
        {
            id: 2,
            tittle: "Мои книги",
            icon: bookIcon,
            url: "mybooks",
            position: 'top'
        },
        {
            id: 3,
            tittle: "Мой блог",
            icon: reviewIcon,
            url: "myblog",
            position: 'top'
        },
        {
            id: 4,
            tittle: "Пишу книгу",
            icon: reviewIcon,
            url: "writebook",
            position: 'top'
        },
        {
            id: 5,
            tittle: "Я книгоман",
            icon: booksIcon,
            url: "book",
            position: 'top'
        },
        {
            id: 6,
            tittle: "Избранные",
            icon: likeIcon,
            url: "favorites",
            position: 'top'
        },
        {
            id: 7,
            tittle: "Настройки",
            icon: settingsIcon,
            url: "settings",
            position: 'bottom'
        },
        {
            id: 8,
            tittle: "Выйти",
            icon: exitIcon,
            url: "exit",
            position: 'bottom'
        },
    ]

    const router = useLocation()

    const NavbarLink = ({ tittle, icon, url }: NavbarLinkProps) => {
        return (
            <Link to={`/personalarea/${url}`} className=''>
                <div className={`flex items-center rounded py-[14px] px-[8px] ease-in-out duration-150 hover:bg-[#FEF7E8] `}>
                    <div className='mr-[8px]'>
                        <img src={icon} alt='icon' className='h-[20px] w-[20px]' />
                    </div>
                    <p className='font-semibold'>
                        {tittle}
                    </p>
                </div>
            </Link>
        )
    }

    return (
        <div className="max-md:w-screen1/2 p-[20px] md:p-[40px] border-r flex flex-col">
            <div className="border-b pb-[50px] flex justify-center items-center">
                <Link to={'/personalarea'}>
                    <img src={logoSvg} alt="logo" className="h-[18px]" />
                </Link>
            </div>
            <div className='w-[160px] h-full mt-[40px] flex flex-col justify-between'>
                <div>
                    {sidebarLinks && sidebarLinks.filter(item => item.position == "top").map((item) => (
                        <NavbarLink tittle={item.tittle} icon={item.icon} url={item.url} />
                    ))}
                </div>
                <div>
                    {sidebarLinks && sidebarLinks.filter(item => item.position == "bottom").map((item) => (
                        <NavbarLink tittle={item.tittle} icon={item.icon} url={item.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PersonalAreaSidebar