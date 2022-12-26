import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from '../../Components/BookCard'
import BreadCrumb from '../../Components/BreadCrumb'
import MainLayout from '../../Components/Layout/MainLayout'

type Props = {}

export type Book = {
    id: number,
    name: string,
    author: string,
    year: string,
    genre: string,
    description: string,
    rating: number,
    imageUrl: any,
    pdf: string
}



function Library({ }: Props) {

    const [loading, setLoading] = useState(false)

    const [appState, setAppState] = useState()

    const [bookLists, setBooklists] = useState<Book[] | null>()

    useEffect(() => {
        const apiUrl = 'http://localhost:4000/books';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setBooklists(allPersons);
        });
        console.log(bookLists)
    }, [setBooklists]);



    return (
        <MainLayout>
            <div className='max-w-7xl mx-auto p-4'>
                <BreadCrumb />
                <div className='mt-2 grid min-[372px]:grid-cols-1 max-[500px]:grid-cols-2 grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
                    {bookLists && bookLists.map((book) => <div><BookCard id={book.id} name={book.name} author={book.author} bookUrl={book.imageUrl} rating={book.rating} /></div>)}
                </div>
            </div>
        </MainLayout>
    )
}

export default Library