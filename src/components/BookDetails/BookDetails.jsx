import { key } from "localforage";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom';
import Details from "../Details/Details";

export default function BookDetails() {

    const { bookId } = useParams(); // Extract the bookId from URL parameters
    // console.log(bookId)
    const books = useLoaderData()
    // const [book, setBook] = useState()
    
    

    return (
        <div>
           <h2>books details</h2>
           {
             books.map((book)  => {
               if (book.bookId === bookId) {
                 return (
                   <Details key={book.bookId} book={book}></Details>
                 )
               }
             })
           }
        </div>
    )
}
